/**
 * create an image of an mrt scan
 * @param {org.blockchain.health.create_img} create_img - the create_img transaction
 * @transaction
 */

async function create_img(create_img) {
    console.log('create_img');

    const factory = getFactory();
    const NS = 'org.blockchain.health';
    const img = factory.newResource(NS, 'Image', create_img.id_img);

  /**
    if (getCurrentParticipant().getFullyQualifiedType() !== NS + ".Doctor") {
      throw new Error('Current participant is not a Doctor');
    }
   **/

    img.img = create_img.img;
  	img.doc = factory.newRelationship(NS, 'Doctor', create_img.id_doc);
    //img.doc = getCurrentParticipant();

    // save the order
    const registry = await getAssetRegistry(img.getFullyQualifiedType());
    await registry.add(img);

  	const create_img_event = factory.newEvent(NS, 'create_img_event');

  	create_img_event.doc = img.doc;

    emit(create_img_event);
}

/* global getAssetRegistry getFactory emit */

/**
 * create an image of an mrt scan
 * @param {org.blockchain.health.diagnose_img} diagnose_img - the diagnose_img transaction
 * @transaction
 */

async function diagnose_img(diagnose_img){

  const factory = getFactory();
  const NS = "org.blockchain.health";
  const registry = await getAssetRegistry("org.blockchain.health.Image");

  var img = await registry.get(diagnose_img.id_img);

  img.mla = factory.newRelationship(NS, 'MLA', diagnose_img.id_mla);
  img.status = "diagnosed";
  img.cancer = diagnose_img.cancer;

  await registry.update(img);

  let event = getFactory().newEvent(NS, 'diagnose_img_event');
    //event.img = img;
  	event.mla = img.mla;
    event.status = "diagnosed";
    event.cancer = img.cancer;
    emit(event);
}