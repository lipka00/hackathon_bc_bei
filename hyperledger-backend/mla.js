// MLA User Authentification
async function getMLA(login, password) {
    
  	// get list of doctors matching the essentials
  	const mlas = await query("getMLA", {login: login, password: password});  	
  	
  	// if no doctors where found
  	if (mlas.length == 0){
    	throw new Error('Could not find MLA. Please check your login and password.');
    }
  	
  	// if more then one doctor was found
  	if (mlas.length > 1){
      	throw new Error('Found more then one MLA.');
    }

  	// get doctor from list of doctors
  	var mla = mlas.shift();
  
  	return mla;
}

/**
 * diagnose an image
 * @param {org.blockchain.health.diagnose_img} diagnose_img - the diagnose_img transaction
 * @transaction
 */
  
async function diagnose_img(diagnose_img){
  	console.log("diagnose_img");
   	    
    const factory = getFactory();
    const NS = "org.blockchain.health";
  
  	// get authenticated mla
   	var mla = await getMLA(diagnose_img.login, diagnose_img.password);
  
  	// get image registry
    const registry = await getAssetRegistry(NS + ".Image");
	
  	// get image object
    var img = await registry.get(diagnose_img.id_img);

   	if (img.status == "diagnosed"){
    	throw new Error('Image has already been diagnosed.');
    }
  	
  	// set image properties
    img.mla = factory.newRelationship(NS, 'MLA', mla.getIdentifier());
    img.status = "diagnosed";
    img.cancer = diagnose_img.cancer;
  
  	// send payment
  	const registryDoc = await getParticipantRegistry(NS + ".Doctor");	
  	
  	var doctors = await query("selectDoctorByID", {login: img.doc.getIdentifier()}); 
  	var doctor = doctors.shift();
  
  	doctor.balance -= 0.3;

	await registryDoc.update(doctor)
    let send_payment_event = factory.newEvent(NS, 'send_payment_event');
    emit(send_payment_event);
  	
  
  	// receive payment
  	const registryMLA = await getParticipantRegistry(NS + ".MLA");	
  
  	mla.balance += 0.3;

	await registryMLA.update(mla);
    let receive_payment_event = factory.newEvent(NS, 'receive_payment_event');
    emit(receive_payment_event);
  
    // save image into registry
    await registry.update(img);
    let diagnose_img_event = factory.newEvent(NS, 'diagnose_img_event');
    emit(diagnose_img_event);
}

/**
 * increase the balance of an mla
 * @param {org.blockchain.health.increase_balance_mla} increase_balance_mla - the increase_balance_mla transaction
 * @transaction
 */
  
async function increase_balance_mla(increase_balance_mla) {
  	console.log("increase_balance_doc");
  
    const factory = getFactory();
    const NS = "org.blockchain.health";
  
  	var mla = await getMLA(increase_balance_mla.login, increase_balance_mla.password);
  
  	//get image registry
    const registry = await getParticipantRegistry(NS + ".MLA");
	
  	// increase balance
  	mla.balance += increase_balance_mla.amount;
  
  	// save changes into registry
    await registry.update(mla);
    let increase_balance_doc_event = getFactory().newEvent(NS, 'increase_balance_doc_event');
    emit(increase_balance_doc_event);
}