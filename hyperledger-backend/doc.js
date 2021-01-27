// Doctor User Authentification
async function getDoctor(login, password) {
    
  	// get list of doctors matching the essentials
  	const doctors = await query("getDoctor", {login: login, password: password});  	
  	
  	// if no doctors where found
  	if (doctors.length == 0) {
    	throw new Error('Could not find Doctor. Please check your login and password.');
    }
  	
  	// if more then one doctor was found
  	if (doctors.length > 1) {
      	throw new Error('Found more then one Doctor.');
    }

  	// get doctor from list of doctors
  	var doctor = doctors.shift();
  
  	return doctor;
}

// get Image id
async function getImageId(){
 	
  // get all images
  const images = await query("selectImg");
  
  if (images.length > 0) {
  	// get all ids
    var ids = [];
  	images.forEach(function(image) {
	  		ids.push(image.id_img)               
  	});
  
    // get the max number of all ids
  	var max = Math.max(...ids);
  	
    // increment the current max id to get the new id
  	var id = max+1;
   
  } else if (images.length == 0) {
    
    // set id to 1
    var id = 1;
  }
  
  // id's in hyperledger must be strings
  id = id.toString();
  
  return id;
}

function check_image_requirements(csv, width, height){
  //requirements
  var w = 200;
  var h = 300;
  var l = w*h;
  
  var length = csv.split(",").length 
  
  if (w !== width) {
    throw new Error('image width is not 200');
  }
  
  if (h !== height) {
    throw new Error('image height is not 300');
  }
  
 if (l !== length) {
    throw new Error('image is not grayscale');
  }

}

/**
 * create an image of an mrt scan
 * @param {org.blockchain.health.create_img} create_img - the create_img transaction
 * @transaction
 */

async function create_img(create_img) {
    console.log('create_img');
	
  	const factory = getFactory();
    const NS = 'org.blockchain.health';
  
  	// check if image fulfills all requirements
  	check_image_requirements(create_img.img_csv, create_img.width, create_img.height);
  
  	// get authenticated doctor
   	var doctor = await getDoctor(create_img.login, create_img.password);
	
  	// get id
  	var id_img = await getImageId();
    
  	// create image object
  	const img = factory.newResource(NS, 'Image', id_img);
  	
  	// get image registry
  	const registry = await getAssetRegistry(img.getFullyQualifiedType());
	
  	// set image properties
  	img.doc = factory.newRelationship(NS, 'Doctor', doctor.getIdentifier());
    img.width = create_img.width;
  	img.height = create_img.height;
  	img.img_base64 = create_img.img_base64;
  	img.img_csv = create_img.img_csv;

  	// save image into registry
    await registry.add(img);
  	const create_img_event = factory.newEvent(NS, 'create_img_event');
    emit(create_img_event);
}

/**
 * delete an image of an mrt scan
 * @param {org.blockchain.health.delete_img} delete_img - the delete_img transaction
 * @transaction
 */
  
async function delete_img(delete_img) {
  	console.log("delete_img");
  
    const factory = getFactory();
    const NS = "org.blockchain.health";
  
  	var doctor = await getDoctor(delete_img.login, delete_img.password);
  
  	//get image registry
    const registry = await getAssetRegistry(NS + ".Image");
	
  	// get image object
    var img = await registry.get(delete_img.id_img);

  	// requirement
  	if (doctor.getIdentifier() !== img.doc.getIdentifier()) {
    	throw new Error('Doctor can only delete own images.');
    }
  
  	// save image into registry
    await registry.remove(img);
    let delete_img_event = getFactory().newEvent(NS, 'delete_img_event');
    emit(delete_img_event);
}

/**
 * increase the balance of a doctor
 * @param {org.blockchain.health.increase_balance_doc} increase_balance_doc - the increase_balance_doc transaction
 * @transaction
 */
  
async function increase_balance_doc(increase_balance_doc) {
  	console.log("increase_balance_doc");
  
    const factory = getFactory();
    const NS = "org.blockchain.health";
  
  	var doctor = await getDoctor(increase_balance_doc.login, increase_balance_doc.password);
  
  	//get image registry
    const registry = await getParticipantRegistry(NS + ".Doctor");
	
  	// increase balance
  	doctor.balance += increase_balance_doc.amount;
  
  	// save changes into registry
    await registry.update(doctor);
    let increase_balance_doc_event = getFactory().newEvent(NS, 'increase_balance_doc_event');
    emit(increase_balance_doc_event);
}
