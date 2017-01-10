function inName(name){
	names=name.split(" ");
	var newName=names[0].charAt(0).toUpperCase() + names[0].slice(1)+" "+names[1].toUpperCase();
	return newName;
}
$("#main").append(internationalizeButton);

var bio={
	"name":"Kenneth Mora",
	"role":"Web Developer",
	"contacts":{
		"mobile":"8647-0102",
		"email":"kmora3005@gmail.com",
		"github":"kmora3005",
		"location":"Cartago"
		},
	"welcomeMessage":"Welcome to my resume",
	"skills":["C#","XML","Javascript","SQL","HTML","CSS","Python"],
	"biopic":"images/kenneth.jpg"
	};
		
bio.display = function (){
	var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedPicture=HTMLbioPic.replace("%data%",bio.biopic);

	var idContacts=["#topContacts","#footerContacts"];
	for (var index=0; index<idContacts.length; index++){
		$(idContacts[index]).append(formattedEmail);
		$(idContacts[index]).append(formattedMobile);
		$(idContacts[index]).append(formattedGithub);
		$(idContacts[index]).append(formattedLocation);
	}
	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMsg);
	
	$("#header").append(HTMLskillsStart);	
	if (bio.skills.length>=0){
		for (var index=0; index<bio.skills.length; index++){
			var formattedSkills=HTMLskills.replace("%data%",bio.skills[index]);
			
			$("#skills").append(formattedSkills);
		}
	}
}

var education={
	"schools":[{
		"name":"Instituto Tecnológico de Costa Rica",
		"location":"Cartago",
		"degree":"Bachelor of Computer Engineering",
		"majors":["BA"],
		"dates":2012,
		"url":"http://www.tec.ac.cr/"
	}],
	"onlineCourses":[
	{
		"title":"Intro to Computer Science",
		"school":"Udacity",
		"date":2016,
		"url":""
	},
	{
		"title":"Javascripts basics",
		"school":"Udacity",
		"date":2016,
		"url":"https://classroom.udacity.com/courses/ud804/"
	}
	]
};

education.display = function(){
	for (var index=0; index< education.schools.length; index++){
		var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[index].name);
		var formattedSchoolDegree=HTMLschoolDegree.replace("%data%",education.schools[index].degree);
		var formattedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[index].dates);
		var formattedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[index].location);
		var formattedSchoolMajor=HTMLschoolMajor.replace("%data%",education.schools[index].majors);
		var formattedSchoolURL=HTMLschoolURL.replace("%data%",education.schools[index].url);
		
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolURL);
	}
	
	$("#education").append(HTMLonlineClasses);
	for (var index=0; index< education.onlineCourses.length; index++){
		var formattedOnlineCourseName=HTMLonlineTitle.replace("%data%",education.onlineCourses[index].title);
		var formattedOnlineCourseSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[index].school);
		var formattedOnlineCourseDates=HTMLonlineDates.replace("%data%",education.onlineCourses[index].date);
		var formattedOnlineCourseURL=HTMLonlineURL.replace("%data%",education.onlineCourses[index].url);
		
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineCourseName);
		$(".education-entry:last").append(formattedOnlineCourseSchool);
		$(".education-entry:last").append(formattedOnlineCourseDates);
		$(".education-entry:last").append(formattedOnlineCourseURL);
	}
}

var work ={
	"jobs":[
	{
		"employer":"Ncubo",
		"title":"Software Developer",
		"location":"Cartago",
		"dates":"2015-Current",
		"description":"I work on the company's own Bambu system and other outsourcing systems, adding new features, integrating existing libraries and other systems like ERP (Exactus) using .NET web technology"
	},
	{
		"employer":"Fairplay Labs",
		"title":"Software Developer",
		"location":"Zapote",
		"dates":"2012-2014",
		"description":"I worked on 5 game projects using Unity3d, Monodevelop and C# language. I implemented new features to the applications and fixing bugs."
	},
	]
};

work.display = function(){
	work.jobs.forEach(function(job){
		var formattedEmployer=HTMLworkEmployer.replace("%data%",job.employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",job.title);
		var formattedWorkDates=HTMLworkDates.replace("%data%",job.dates);
		var formattedWorkLocation=HTMLworkLocation.replace("%data%",job.location);
		var formattedWorkDescription=HTMLworkDescription.replace("%data%",job.description);
		
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	});
}

var projects={
	"projects":[
	{
		"title":"A game",
		"dates":2015,
		"description":"It was about spaceships combat",
		"images":[]
	},
	{
		"title":"My resume",
		"dates":2016,
		"description":"This one",
		"images":["images/project2.png"]
	}
]};

projects.display = function(){
	for (var index=0; index< projects.projects.length; index++){
		var formattedProjectName=HTMLprojectTitle.replace("%data%",projects.projects[index].title);
		var formattedProjectDates=HTMLprojectDates.replace("%data%",projects.projects[index].dates);
		var formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.projects[index].description);
		
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectName);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		
		for (var indexImage=0; indexImage<projects.projects[index].images.length; indexImage++){
			var formattedImages=HTMLprojectImage.replace("%data%",projects.projects[index].images[indexImage]);
			
			$(".project-entry:last").append(formattedImages);
		}
	}
}

bio.display();
education.display();
work.display();
projects.display();
