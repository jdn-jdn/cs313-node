/* 
 Determines the postage required for a single piece of retail 
 first-class mail.
*/
function calculateRate(req, res) {
	console.log("Calculating thee rate...");

	var mailType = req.query.mail_type;
	var mailWeight = req.query.weight;

	console.log('The mail type is: ' + mailType);
	console.log('The mail weight is: ' + mailWeight);

	var cost = 0.0;

	if(mailType == "letters_stamped") {
		if (mailWeight > 0.0 && mailWeight <= 1.0) {
			cost = mailWeight * 0.50;
		} 
		else if (mailWeight > 1.0 && mailWeight <= 2.0) {
			cost = mailWeight * 0.71;
		}
		else if (mailWeight > 2.0 && mailWeight <= 3.0) {
			cost = mailWeight * 0.92;
		}
		else if (mailWeight > 3.0 && mailWeight <= 3.5) {
			cost = mailWeight * 1.13;
		}
	} 
	else if(mailType == "letters_metered") {
		if (mailWeight > 0.0 && mailWeight <= 1.0) {
			cost = mailWeight * 0.47;
		} 
		else if (mailWeight > 1.0 && mailWeight <= 2.0) {
			cost = mailWeight * 0.68;
		}
		else if (mailWeight > 2.0 && mailWeight <= 3.0) {
			cost = mailWeight * 0.89;
		}
		else if (mailWeight > 3.0 && mailWeight <= 3.5) {
			cost = mailWeight * 1.10;
		}

	} 
	else if(mailType == "large") {
		if (mailWeight > 0.0 && mailWeight <= 1.0) {
			cost = mailWeight * 1.00;
		} 
		else if (mailWeight > 1.0 && mailWeight <= 2.0) {
			cost = mailWeight * 1.21;
		}
		else if (mailWeight > 2.0 && mailWeight <= 3.0) {
			cost = mailWeight * 1.42;
		}
		else if (mailWeight > 3.0 && mailWeight <= 4.0) {
			cost = mailWeight * 1.63;
		}
		else if (mailWeight > 4.0 && mailWeight <= 5.0) {
			cost = mailWeight * 1.84;
		} 
		else if (mailWeight > 5.0 && mailWeight <= 6.0) {
			cost = mailWeight * 2.05;
		}
		else if (mailWeight > 6.0 && mailWeight <= 7.0) {
			cost = mailWeight * 2.26;
		}
		else if (mailWeight > 7.0 && mailWeight <= 8.0) {
			cost = mailWeight * 2.47;
		}
		else if (mailWeight > 8.0 && mailWeight <= 9.0) {
			cost = mailWeight * 2.68;
		}
		else if (mailWeight > 9.0 && mailWeight <= 10.0) {
			cost = mailWeight * 2.89;
		}
		else if (mailWeight > 10.0 && mailWeight <= 11.0) {
			cost = mailWeight * 3.10;
		}
		else if (mailWeight > 11.0 && mailWeight <= 12.0) {
			cost = mailWeight * 3.31;
		}
		else if (mailWeight > 12.0 && mailWeight <= 13.0) {
			cost = mailWeight * 3.52;
		}
	} 
	else if(mailType == "retail") {
		if (mailWeight > 0.0 && mailWeight <= 4.0) {
			cost = mailWeight * 3.50;
		}
		else if (mailWeight > 4.0 && mailWeight <= 8.0) {
			cost = mailWeight * 3.75;
		}
		else if (mailWeight > 8.0 && mailWeight <= 9.0) {
			cost = mailWeight * 4.10;
		}
		else if (mailWeight > 9.0 && mailWeight <= 10.0) {
			cost = mailWeight * 4.45;
		}
		else if (mailWeight > 10.0 && mailWeight <= 11.0) {
			cost = mailWeight * 4.80;
		}
		else if (mailWeight > 11.0 && mailWeight <= 12.0) {
			cost = mailWeight * 5.15;
		}
		else if (mailWeight > 12.0 && mailWeight <= 13.0) {
			cost = mailWeight * 5.50;
		}		
	}

	console.log("The cost is " + cost);

	var values = {type: mailType, weight: mailWeight, cost: cost};

	res.render('results', values);
}

module.exports = {calculateRate: calculateRate};