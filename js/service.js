mainApp.service('forewordService', function(dbService) {
    
    var keyword = "";
    var greating = dbService.greatings[0];
    var denom = dbService.denoms[dbService.denoms.length-1];
    var customerName = "";
    
    var setKeyword = function(_keyword) {
        keyword = _keyword;
    };

    var getKeyword = function() {
        return keyword;
    };    

    var setGreating = function(_greating) {
        greating = _greating;
    };

    var setDenom = function(_denom) {
        denom = _denom;
    };

    var setCustomerName = function(_customerName) {
        customerName = _customerName;
    };

    var getGreating = function() {
        return greating;
    };

    var getDenom = function() {
        return denom;
    };

    var getCustomerName = function() {
        return customerName;
    };

    var getForeword = function() {
        
        foreword = keyword + "\n";
        
        if (greating.length > 0)
            foreword = foreword + greating + " ";
        
        if (denom.length > 0)
            foreword = foreword + denom + " ";
        
        if (customerName.length > 0)
            foreword = foreword + customerName + " ";

        if (foreword.length > 0)
        {
            foreword = foreword.trim();
            foreword = foreword + ".\n";
        }

        foreword = foreword + '\n';
        return foreword;
    };

    return {
        setKeyword : setKeyword,
        getKeyword : getKeyword,
        setGreating : setGreating,
        setDenom : setDenom,
        setCustomerName : setCustomerName,
        getGreating : getGreating,
        getDenom : getDenom,
        getCustomerName : getCustomerName,
        getForeword : getForeword
    };
});

mainApp.service('afterwordService', function(dbService) {
    
    var ending = dbService.endings[0];
    var myName = dbService.myNames[dbService.myNames.length-1];

    var setEnding = function(_ending) {
        ending = _ending;
    };

    var setMyName = function(_myName) {
        myName = _myName;
    };

    var getEnding = function() {
        return ending;
    };

    var getMyName = function() {
        return myName;
    };

    var getAfterword = function() {
        
        afterword = "";
        
        if (ending.length > 0)
            afterword = afterword + ending + '\n';
        
        if (myName.length > 0)
            afterword = afterword + myName;

        afterword = afterword + '\n';
        return afterword;
    };

    return {
        setEnding : setEnding,
        setMyName : setMyName,
        getEnding : getEnding,
        getMyName : getMyName,
        getAfterword : getAfterword
    };
});

mainApp.service('descriptionService', function(dbService) {
    var experiences = [];
    var beforeComment = "";
    var afterComment = "";

    var skillDescription = dbService.skillDescriptions[0];
    var year = dbService.years[0];

    var getSkillDescription = function () {
        return skillDescription;
    };

    var setSkillDescription = function (_skillDescription) {
        skillDescription = _skillDescription;
    };

    var getYYear = function () {
        return year;
    };

    var setYYear = function (_year) {
        year = _year;
    };

    var getAfterComment = function () {
        return afterComment;
    };

    var setAfterComment = function (_afterComment) {
        afterComment = _afterComment;
    };

    var getBeforeComment = function () {
        return beforeComment;
    };

    var setBeforeComment = function (_beforeComment) {
        beforeComment = _beforeComment;
    };

    var getExperiences = function () {
        return experiences;
    };

    var setExperiences = function (_experiences) {
        experiences = _experiences;
    };

    var getDescription = function() {
        
        description = "";

        if (beforeComment.length > 0)
            description = beforeComment + "\n\n";
        
        if (experiences.length > 0)
        {
            experiences.forEach(function(experience){
                
                mySkills = "";
                experience.skills.forEach(function(skill){
                    mySkills = mySkills + skill + "/";    
                });

                mySkills = mySkills.substring(0, mySkills.length-1);

                desc = experience.skillDescription;
                desc = desc.replace("%y", experience.year);
                desc = desc.replace("%s", mySkills);
                
                desc = desc + "\n";
                description = description + desc;
            });

            description = description.substring(0, description.length-2) + '.\n';
        }

        if (afterComment.length > 0)
            description = description + "\n" + afterComment + "\n";
        
        description = description + '\n';
        return description;
    };

    return {
        getBeforeComment : getBeforeComment,
        setBeforeComment : setBeforeComment,
        getAfterComment : getAfterComment,
        setAfterComment : setAfterComment,
        getExperiences : getExperiences,
        setExperiences : setExperiences,
        getDescription : getDescription, 
        getSkillDescription : getSkillDescription,
        setSkillDescription : setSkillDescription,
        getYYear : getYYear,
        setYYear : setYYear

    };

});

mainApp.service('urlService', function(dbService) {

    var title = dbService.titles[dbService.titles.length-2];
    var urls = [];
    var filters = [];
    var urlItemShows = dbService.urlItems;

    var setUrlItemShows = function(_urlItemShows) {
        urlItemShows = _urlItemShows;
    };

    var getUrlItemShows = function() {
        return urlItemShows;
    };        

    var getFilters = function () {
        return filters;
    };

    var setFilters = function (_filters) {
        filters = _filters;
    };

    
    var getTitle = function () {
        return title;
    };

    var setTitle = function (_title) {
        title = _title;
    };

    var getUrls = function () {
        return urls;
    };

    var setUrls = function (_urls) {
        urls = _urls;
    };

    var getUrlComment = function() {
        
        urlComment = "";

        if (title.length > 0)
            urlComment = "- " + title + "\n";

        if (urls.length > 0)
        {
            urls.forEach(function(item){
                //urlComment = urlComment + "-------------------------------------------\n";
                for (var prop in urlItemShows)
                    if (urlItemShows[prop] == true)
                    {
                        //urlComment = urlComment + prop.toUpperCase() + " : " + item[prop] + "\n";
                        urlComment += item[prop] + "\n";
                    }
            });
        }
        if (urlComment.length > 0)
            urlComment = urlComment + '\n';
        return urlComment;
    };

    return {
        getTitle : getTitle,
        setTitle : setTitle,
        getUrls : getUrls,
        setUrls : setUrls,
        getUrlComment : getUrlComment,
        getFilters : getFilters,
        setFilters : setFilters,
        getUrlItemShows : getUrlItemShows,
        setUrlItemShows : setUrlItemShows
    };

});


mainApp.directive("addbuttonsbutton", function(){
    return {
        restrict: "E",
        template: "<button addbuttons>Click to add buttons</button>"
    }
});

mainApp.directive("addbuttons", function($compile){
    return function(scope, element, attrs){
        element.bind("click", function(){
            scope.count++;
            angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
        });
    };
});

//Directive for showing an alert on click
mainApp.directive("alert", function(){
    return function(scope, element, attrs){
        element.bind("click", function(){
            console.log(attrs);
            alert("This is alert #"+attrs.alert);
        });
    };
});