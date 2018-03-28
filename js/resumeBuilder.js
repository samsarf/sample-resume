/*
This is empty on purpose! Your code to build the resume will go here.
 */


// ****** BIO OBJECT ***********
 
var bio = {
 	name: "Sameera Sarfaraz",
 	role: "Front-End Developer",
 	contacts: {
 		mobile: "937-367-3541",
 		email: "sameera.sarfaraz@yahoo.com",
 		github:"github.com/samsarf",
 		location:"Dallas, TX"
 	},
 	welcomeMessage: "Aspiring, self motivated Front-End Developer, in search of a rewarding career",
 	skills: ["Developer", "HTML","CSS","JS","Bootstrap"],
 	biopic: "images/IMG_3716.jpg"
};


// ********** APPEND BIO ***************

bio.display = function() {
	
	var formattedName= HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedName, formattedRole,formattedPic,formattedMessage);
	
	var formattedContact = [];
	  formattedContact.push(HTMLemail.replace("%data%", bio.contacts.email));
	  formattedContact.push(HTMLgithub.replace("%data%", bio.contacts.github));
	  formattedContact.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	  formattedContact.push(HTMLlocation.replace("%data%", bio.contacts.location));

	  for (var t = 0; t < formattedContact.length; t++) {
	    $("#topContacts, #footerContacts").append(formattedContact[t]);
	  }

	$("#header").append(HTMLskillsStart);
	for (var e = 0; e < bio.skills.length; e++) {
	        var updatedSkill = HTMLskills.replace("%data%", bio.skills[e]);
	        $("#skills").append(updatedSkill);
	    }
};


// ********* INVOKE BIO ****************************

bio.display();


// ********** EDUCATION OBJECT *********************

var education = {
	schools: [
		{
			name: "Wright State University",
			location: "Fairborn, OH, US",
			degree: "Bachelors in Engineering",
			majors:"Biomedical Engineering",
			dates:"2007-2011"
		},
		{
			name: "Wright State University",
			location: "Fairborn, OH, US",
			degree: "Master of Science in Engineering",
			majors:"Industrial & Human Factors Engineering",
			dates:"2011-2012"
		},
	],
	onlineCourses: [
		{
			title: "Nanodegree, Front-End Development",
			school: "Udacity",
			dates: "June 2017 - Present",
			url: '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"></a>',
		}
	],
};


// ********* APPEND EDUCATION **********************

education.display = function() {
	for (var s = 0; s < education.schools.length; s++) {
		$("#education").append(HTMLschoolStart);
	        var updatedName = HTMLschoolName.replace("%data%", education.schools[s].name);
	        var updatedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
	        var updatedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
	        var updatedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
	        var updatedDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
	    
	        $(".education-entry:last").append(updatedName + updatedDegree ).append(updatedLocation, updatedMajor, updatedDates);
	}

	if (education.onlineCourses.length > 0) {

      for (var l = 0; l < education.onlineCourses.length; l++) {
        
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[l].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[l].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[l].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[l].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates).prepend(HTMLonlineClasses).append(formattedOnlineUrl);
      }
    }
  };


// ********* INVOKE EDUCATION ***********************

education.display();


// ***** WORK OBJECT *****************

var work = {
	jobs: [
		{
			employer: "Alcon Laboratories, Inc.",
			title: "QA Validations Engineer",
			location: "Fort Worth, TX",
			dates: "May 2013 - Dec 2013",
			description: "Developed, reviewed, and implemented process validations/qualification protocols, performed qualification activities and associated technical reports."
		},
		{
			employer: "AtriCure, Inc.",
			title: "Quality and Regulatory Engineer Co-op",
			location: "West Chester Township, OH",
			dates: "Sep 2011 - Mar 2012",
			description: "Developed, reviewed, and implemented process validations/qualification protocols, performed qualification activities and associated technical reports."
		}
	],
};


// ****** APPEND WORK ****************************

work.display = function() {
	for (var b = 0; b < work.jobs.length; b++) {
    	$("#workExperience").append(HTMLworkStart);
        
        var updatedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[b].employer);
        var updatedTitle = HTMLworkTitle.replace("%data%", work.jobs[b].title);
        var updatedLocation = HTMLworkLocation.replace("%data%", work.jobs[b].location);
        var updatedDates = HTMLworkDates.replace("%data%", work.jobs[b].dates);
        var updatedDescription= HTMLworkDescription.replace("%data%", work.jobs[b].description);

		var updatedEmployerTitle = updatedEmployer + updatedTitle ; 
        $(".work-entry:last").append(updatedEmployerTitle, updatedLocation, updatedDates, updatedDescription);

	}
};


//*********** INVOKE WORK *********************
work.display();


// ***** PROJECTS OBJECT ***************************

var projects = {
	projects: [
		{
			title:"Portfolio",
			dates:"October 2017",
			description:"Built a Portfolio page",
			images: ["images/img_1.jpg"]
		},
		{
			title:"Resume",
			dates:"September 2017",
			description:"Built an interactive resume",
			images: ["images/map.png"]
		}
	],
};


// ******* APPEND PROJECTS *****************************

projects.display = function() {
	for (var c = 0; c < projects.projects.length; c++) {
		$("#projects").append(HTMLprojectStart);

		var updatedTitle = HTMLprojectTitle.replace("%data%",projects.projects[c].title);
		var updatedDates = HTMLprojectDates.replace("%data%",projects.projects[c].dates);
		var updatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[c].description);
		var updatedImages = HTMLprojectImage.replace("%data%",projects.projects[c].images);

		$(".project-entry:last").append(updatedTitle, updatedDates, updatedDescription, updatedImages);
	}
};



//*********** INVOKE PROJECTS **************************

projects.display();



//******** LOCATION MAP *******************************

$("#mapDiv").append(googleMap);







 











