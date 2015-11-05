mainApp.service('dbService', function() {
	
    var skills = [
    	{
	        title : "Document Information",
	        items : [
		        "HTML",
		        "HTML5",
		        "XHTML",
		        "Javascript",
		        "CSS",
		        "CSS3",
		        "IFrame",
		        "Bootstrap"
		    ]
		},
		{
	        title : "JavaScript Libraries",
	        items : [
		        "jQuery",
		        "AngularJS",
		        "SwipeJS",
		        "KnockoutJS",
		        "Backbone.js",
		        "Google API",
		        "Google Hosted Libraries",
		        "Twitter Platform",
		        "LinkedIn Platform API",
		        "Facebook for Websites",
		        "Prototype",
		        "GSAP",
		        "Froogaloop",
		        "FitVids.JS",
		        "Modernizr",
		        "EnquireJS",
		        "Isotope",        
		        "Lightbox",
		        "Fancybox",
		        "SimplyScroll",
		        "SizzleJS",
		        "Hover Intent",
		        "WebGL",
		        "Three.js",
		        "MooTools"

		    ]
		},
		{
	        title : "Frameworks",
	        items : [
		        "PHP",
		        "ASP.NET",
		        "Ruby on Rails",
		        "J2EE"
		    ]
		},
		{
	        title : "PhoneGap",
	        items : [
	        	"PhoneGap",
		        "Cordova",
		        "Ionic"
		    ]
		},
		{
	        title : "Content Management System",
	        items : [
		        "Wordpress",
		        "Joomla",
		        "Drupal", 
		        "Magento",
		        "Plugins",
		        "Theme template",
		        "Widgets",
		        "CodeIgniter",
		        "Squarespace",
		        "Tumblr"
		    ]
		},
		{
	        title : "Customer Relationship Management",
	        items : [
		        "AgileCRM",
		        "SurgarCRM",
		        "ZohoCRM"
		    ]
		},
		{
	        title : "Plugins",
	        items : [
		        "",
		        ""
		    ]
		},
		{
	        title : "Widgets",
	        items : [
		        "Twitter Timeline",
		        "Facebook Like Box",
		        "Google Font API",
		        "NextGEN Gallery",
		        "WP PageNavi",
		        "Shortcodes Ultimate",
		        "Pinterest",
		        "Twemoji",
		        "Shutterstock",
		        "WP Polls",
		        "JetPack",
		         "Contact Form 7",
		         "MailChimp",
		         "ThemePunch",
		         "AcyMailing",
		         "Typography"
		        
		    ]
		},
		{
	        title : "Database",
	        items : [
		        "SQL",
		        "MySQL",
		        "MSSQL"
		    ]
		},
        {
	        title : "OOP",
	        items : [
	        	"Java",
		        "C++",
		        "C#",
		        "Python",
		        "C",
		        "Objective-C"
		    ]
		},
		{
	        title : "Coding Style or Standard",
	        items : [
		        "PSR-1/2",
		        "Geosoft.no",
		        "Google C++ Style Guide", 
		        "Objective-C Style Guide",
		        "Java Style Guide", 
		        "Python Style Guide", 
		        "Shell Style Guide", 
		        "HTML/CSS Style Guide", 
		        "JavaScript Style Guide", 
		        "AngularJS Style Guide", 
		        "Common Lisp Style Guide", 
		        "Vimscript Style Guide"
		    ]
		},
		{
	        title : "Wireframing",
	        items : [
		        "Balsamiq",
		        "fluidui"
		    ]
		},
		{
	        title : "Stack",
	        items : [
		        "LAMP stack",
		        "MEAN stack"
		    ]
		},
    	{
	        title : "Web Server",
	        items : [
		        "Apache",
		        "IIS 7",
		        "nginx"
		    ]
		},
		{
	        title : "Server Information",
	        items : [
		        "Unix",
		        "OpenSSL",
		        "Fedora",
		        "Debian",
		        "Ubuntu"
		    ]
		},
		{
	        title : "Hosting Providers",
	        items : [
	        	"GoDaddy",
		        "HostGator",
		        "NetGroup",
		        "Rackspace",
		        "Linode",
		        "Hetzner",
		        "Site5",
		        "UberGlobal",
		        "Amazon",
		        "SiteHost",
		        "Colo4",
		        "OVH",
		        "Intergenia"
		    ]
		},
		{
	        title : "Nameserver Providers",
	        items : [
	        	"GoDaddy DNS",
		        "InterNetX DNS",
		        "Site5 DNS", 
		        "ZoneEdit"
		    ]
		},
		{
	        title : "Email Services",
	        items : [
		        "SPF",
		        "Google Apps for Business",
		        "Mailgun",
		        "Microsoft Exchange Online",
		        "Office 365 Mail",
		        "GoDaddy Email",
		        "McAfee SaaS Email"
		    ]
		},
		{
	        title : "SSL Certificate",
	        items : [
		        "Parallels SSL",
		        "GlobalSign",
		        "AlphaSSL",
		        "Network Solution SSL",
		        "Geo Trust SSL",
		        "RapidSSL",
		        "Comodo SSL",
		        "DigiCert SSL"
		    ]
		},
		{
	        title : "Ecommerce",
	        items : [
	        	"WooCommerce",
		        "Magento",
		        "Cart Functionality", 
		        "Shopify",
		        "Squarespace Commerce",
		        "Volusion",
		        "VirtueMart"
		    ]
		},
		{
	        title : "Payment Providers",
	        items : [
		        "Paypal",
		        "Stripe",
		        "Authorize.net",
		        "Maestro",
		        "MasterCard",
		        "Visa",
		        "Pound Sterling"
		    ]
		},
		{
	        title : "Advertising",
	        items : [
		        "Facebook Custom Audiences",
		        "DoubleClick.Net",
		        "Google Adsense",
		        "SkimLinks"
		    ]
		},
		{
	        title : "Mapping",
	        items : [
		        "Google Maps"
		    ]
		},
		{
	        title : "Analytics and Tracking",
	        items : [
		        "Google Analytics",
		        "CrazyEgg",
		        "Google Conversion Tracking"
		    ]
		},
		{
	        title : "Aggregation Funcitonality",
	        items : [
		        "RSS",
		        "Atom",
		        "Really Simple Discovery",
		        "Live Writer Support",
		        "Pingback Support",
		        "Dublin Core",
		        "FeedBurner",
		        "GoogleFeedProxy"
		    ]
		},
		{
	        title : "Content Delivery Network",
	        items : [
		        "MaxCDN",
		        "CloudFont",
		        "Vimeo CDN", 
		        "Akamai",
		        "GStatic Google Static Content",
		        "AJAX Libraries API",
		        "Microsoft Azure Blob Storage",
		        "Wordpress Grid"
		    ]
		},
		{
	        title : "Audio/Video Media",
	        items : [
		        "Youtube",
		        "Vimeo"
		    ]
		},
		{
	        title : "Testing",
	        items : [
		        "Unit Testing",
		        "Functional Testing",
		        "iOS Mobile UI Testing", 
		        "Web UI Testing",
		        "Load/Performance Testing"
		    ]
		},
		{
	        title : "Testing Tools",
	        items : [
		        "Appium",
		        "Selenium",
		        "TestNG", 
		        "Testlink",
		        "MonkeyTalk",
		        "Testmunk",
		        "Soasta"
		    ]
		},
		{
	        title : "Language",
	        items : [
		        "English",
		        "Chinese"
		    ]
		}

    ];

    var urls = [
        
        {
        	desc:"Wedding Filmmakers' Website",
            url:"http://hauke.co.za/",
            keyword:"Wordpress, PHP, SSL, Vimeo, Google Maps",
            role:""
        },
        {
        	desc:"",
            url:"http://divinespace.co.za/",
            keyword:"Wordpress, PHP, SSL, WooCommerce, Facebook Domain Insights, Google Analytics, Twitter Platform, LinkedIn Platform API, LinkedIn Share Plugin, Facebook Like Box",
            role:""
        },
        {
        	desc:"Room Booking Site",
            url:"http://thebend.co.za/",
            keyword:"Wordpress, PHP, SSL, Lightbox",
            role:""
        },
        {
        	desc:"Gold Trading Site",
            url:"http://www.goldcapital.co.za/",
            keyword:"Wordpress, PHP, WooCommerce, Google Analytics, Google API, LiveChat, Google Maps",
            role:""
        },
        {
        	desc:"Training System",
            url:"http://mypeergroup.com/",
            keyword:"Wordpress, PHP, Google Analytics",
            role:""
        },
        {
        	desc:"PURE Nutrition Technology",
            url:"http://purenutrition.co.za/",
            keyword:"Wordpress, PHP, Google Analytics, Facebook SDK, Twitter Timeline",
            role:""
        },
        {
        	desc:"Training and Consultancy",
            url:"http://www.protential.ae/",
            keyword:"Wordpress, PHP, WooCommerce, Vimeo, RSS",
            role:""
        },
        {
        	desc:"",
            url:"http://alarabiya99.ae/",
            keyword:"Wordpress, PHP, WooCommerce, Google Analytics, WP Plugins",
            role:""
        },
        {
        	desc:"",
            url:"http://abudhabiweek.ae/",
            keyword:"Wordpress, PHP, Google Analytics",
            role:""
        },
        {
        	desc:"News Site",
            url:"http://wadup.com.ng/",
            keyword:"Wordpress, PHP, SSL, Google Adsense, Google Analytics, RSS",
            role:""
        },
        {
        	desc:"Working Skills Traning",
            url:"http://www.getsmarter.co.za/",
            keyword:"",
            role:""
        },
        {
        	desc:"BabyCare Site",
            url:"http://www.calorababy.co.za/",
            keyword:"Joomla, PHP, Google Adsense, Google Analytics, RSS",
            role:""
        },
        {
        	desc:"Flights Booking System",
            url:"https://www.travelstart.com.eg/",
            keyword:"",
            role:""
        },
        {
        	desc:"",
            url:"http://e-xpedition.ru/",
            keyword:"PHP, Google Adsense, Google Analytics, RSS",
            role:""
        },
        {
        	desc:"English SMS Site",
            url:"http://englishsms.in/",
            keyword:"Joomla, PHP, Google Adsense, Google Analytics, Facebook SDK, SSL",
            role:""
        },
        {
        	desc:"The Council for the Regulation of Engineering Site",
            url:"http://www.coren.gov.ng/",
            keyword:"Joomla, PHP",
            role:""
        },
        {
        	desc:"Online Horse Shop",
            url:"http://www.equishop.sk/",
            keyword:"Joomla, PHP, Google Analytics, Euro, AcyMailing",
            role:""
        },
        {
        	desc:"Hotel Booking System",
            url:"http://apartman-strbske-pleso.sk/",
            keyword:"Joomla, PHP, DoubleClick.Net, Google Analytics",
            role:""
        },
        {
        	desc:"",
            url:"http://www.zilinadnes.sk/",
            keyword:"Joomla, PHP, DoubleClick.Net, Facebook Like Box",
            role:""
        },
        {
        	desc:"Real Estate Solutions",
            url:"http://spectrumproperties.co.ug/",
            keyword:"Wordpress, PHP, AngularJS, Pinterest",
            role:""
        },
        {
        	desc:"Insurance tailor-made for women",
            url:"https://www.firstforwomen.co.za/",
            keyword:"Drupal, ASP.NET, PHP, Google Analytics, SessionCam",
            role:""
        },
        {
        	desc:"Second-hand Household Goods",
            url:"http://www.cashconverters.co.za/",
            keyword:"Drupal, ASP.NET, PHP, Google Analytics, Visa",
            role:""
        },
        {
        	desc:"Men's Body Building and Health",
            url:"http://www.mh.co.za/",
            keyword:"Wordpress, PHP, SSL,Google Analytics, YouTube, Typography, Google Maps",
            role:""
        }


 /*
        ,
        {
        	desc:"",
            url:"",
            keyword:"",
            role:""
        }
*/
    ];

    for(i=0; i<urls.length;i++)
    	urls[i].index = i;

    var urlItems = {};
	
	for (var key in urls[0])
		if (key != "index")
			urlItems[key] = false;
	urlItems.url = true;
		
    var endings = ["Best.", "All Best.", "Best Wishes.", "Best Regards.", "Thanks!", "Thanks so much!"];
    var myNames = ["Solafort.", "Covernal.", "Li, LiaoMing.", "David Lorenz.", ""];
    var greatings = ["Hi", "Dear", "Hello", ""];
	var denoms = ["Sir", "Mr.", "Dr.", "Mis.", ""];
	var years = [
        "",
        "a lot of", 
        "lots of", 
        "1 year", 
        "2 years", 
        "3 years", 
        "4 years", 
        "5 years",
        "more than 5 years"
    ];

    var skillDescriptions = [
    	"I have %y experience in %s.", // I have 4 years of experience in Java.
    	"I have %y experience as a %s developer.", // I have a 3 years of work experience as a Java developer.
    	"I am a %s developer with %y experience.", // I am a Java developer with 4.5 years of experience.
    	"I have experience in %s.", // I have experience in Java
    	"I specialize in %s.",
    	"I always follow %s.", // I follow standard Java coding conventions.
    	"I always comply with %s.", // I comply with the Google Java Standard.
    	"I have proficient %s skills.",
    	"I'm fluent in speaking %s.",
    	"I'm a proficient speaker of %s."
    ];

    var titles = [
		"Related my results",
		"My results",
		"Please check my results",
		""
	];

	var beforeComments = [
        "No data yet.",
        ""
    ];

    var afterComments = [
        "I look forward to hearing from you soon.",
        "If you need any more information, please let me know.",
        "I hope to hear from you soon.",
        "If you need any more info, just drop me a line.",
		"I think you'd better to make sure a developer has the right skills and experience for your project.",
		"I'm willing to do any kind of small task what you need mostly before start.",
        "I will provide you good quality and service with professional looking and well-formed structure if I have a chance to do this.", 
        ""
    ];
    
    return {
    	endings : endings,
    	myNames : myNames,
    	skills : skills,
    	years : years,
    	greatings : greatings,
    	denoms : denoms,
    	titles : titles,
    	urls : urls,
    	urlItems : urlItems,    	
    	skillDescriptions : skillDescriptions,
    	beforeComments : beforeComments,
    	afterComments : afterComments
    };
});