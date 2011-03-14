var win = Ti.UI.currentWindow;
win.backgroundColor = 'red';

var shopName = Ti.UI.createLabel({
    top:-345,
    text:'Bike Newport',
    font:{fontSize:38, fontStyle:'bold'},
    left:70
});

win.add(shopName);

/*
//Create a drop shadow view
var shadow = Ti.UI.createView({
  width:300,
  height:55,
  top:85,
  left:15,
  borderRadius:10,
  opacity:0.5,
  backgroundColor:"black"
});
win.add(shadow);

var shadowPhone = Ti.UI.createView({
  width:300,
  height:30,
  top:160,
  left:15,
  borderRadius:5,
  opacity:0.5,
  backgroundColor:"black"
});
win.add(shadowPhone);
*/

var shopAddrButton = Ti.UI.createButton({
    width:300,
    height: 55,
    top:160,
    boarderRadius:5
    
});
win.add(shopAddrButton);

var phoneButton = Ti.UI.createButton({
	width:300,
	height:30,
    left:10,
    borderRadius:5,
    top:80
});
win.add(phoneButton);

var urlButton = Ti.UI.createButton({
	width:300,
	height:30,
    left:10,
    borderRadius:5,
    top:120
});
win.add(urlButton);

var shopLogo =  Titanium.UI.createImageView({
    image:'../images/bn-anno.png',
    height:57,
    width:57,
    left:8,
    top:5
});
win.add(shopLogo);

// add button labels and text
////////////////////////////////////////////////////////
titlePhoneLabel = Ti.UI.createLabel({
  text:'phone',
  color:'#093EB0',
  top:-230,
  left:20,
  fontweight:'bold'
});
win.add(titlePhoneLabel);

PhoneLabel = Ti.UI.createLabel({
  text:'541-265-9917',
  color:'black',
  top:-230,
  left:94
});
win.add(PhoneLabel);

titleUrlLabel = Ti.UI.createLabel({
  text:'website',
  color:'#093EB0',
  top:-150,
  left:20,
  fontweight:'bold'
});
win.add(titleUrlLabel);

urlLabel = Ti.UI.createLabel({
  text:'http://www.bikenewport.net',
  color:'black',
  top:-150,
  left:94
});
win.add(urlLabel);


titleAddrLabel = Ti.UI.createLabel({
  text:'Address',
  color:'#093EB0',
  top:-68,
  left:20,
  fontweight:'bold'
});
win.add(titleAddrLabel);

addrLabel = Ti.UI.createLabel({
  text:'150 NW 6th street\nNewport OR 97365',
  color:'black',
  top:-45,
  left:94
});
win.add(addrLabel);

detailsLabel = Ti.UI.createLabel({
  text:'Offering touring bicyclists:\n- Showers\n- Laundry facilities\n- Wireless Internet\n- Comfortable lounge with TV\n- Full service shop\n- Clothing, parts and accessories',
  color:'black',
  top:165,
  left:20
});
win.add(detailsLabel);


//Add event listners

// first lets dial the phone number when clicked
phoneButton.addEventListener('click', function(){
     Titanium.Platform.openURL('tel:5412659917');
     Ti.API.info('calling phone number...');
});

shopAddrButton.addEventListener('click', function(){
    // place holder for event 
    Ti.API.info('Clicked on shop address...');
});

urlButton.addEventListener('click', function(){
    Titanium.Platform.openURL('http://www.bikenewport.net/');

    Ti.API.info('user clicked on shop website address...');
});
