mainApp.controller('DescriptionController', function($scope, descriptionService, dbService) {
	$scope.skills = dbService.skills;
    $scope.skillChecked = [];

    $scope.selectedSkills = [];

    $scope.years = dbService.years;

    $scope.skillDescription = descriptionService.getSkillDescription();
    $scope.skillDescriptions = dbService.skillDescriptions;

    $scope.year = descriptionService.getYYear();

    $scope.beforeComment = descriptionService.getBeforeComment();
    $scope.afterComment = descriptionService.getAfterComment();
    
    $scope.experiences = descriptionService.getExperiences();
    
    $scope.description = descriptionService.getDescription();

    $scope.beforeComments = dbService.beforeComments;
    $scope.afterComments = dbService.afterComments;

    $scope.bcItem;
    $scope.acItem;

    $scope.makeSkills = function(_skill) {
        if ($scope.skillChecked[_skill])
            $scope.selectedSkills.push(_skill);
        else
        {
            idx = $scope.selectedSkills.indexOf(_skill);
            if (idx >= 0)
                $scope.selectedSkills.splice(idx, 1);
        }
    }

    $scope.addNewExGroup = function() {
        if ($scope.selectedSkills.length > 0)
        {
            newEx = {};
            newEx.index = $scope.experiences.length;
            newEx.skillDescription = $scope.skillDescription;
            newEx.year = $scope.year;
            newEx.skills = $scope.selectedSkills;

            $scope.experiences.push(newEx);
            descriptionService.setExperiences($scope.experiences);
            
            $scope.description = descriptionService.getDescription();
            $scope.selectedSkills = [];
            $scope.skillChecked = [];
        }
    }

    $scope.removeExGroup = function(_index) {
        $scope.experiences.splice(_index, 1);
        for(ii=0; ii<$scope.experiences.length; ii++)
            $scope.experiences[ii].index = ii;
        
        descriptionService.setExperiences($scope.experiences);       
        $scope.description = descriptionService.getDescription();
    }

    $scope.setBeforeComment = function() {
        descriptionService.setBeforeComment($scope.beforeComment);           
        $scope.description = descriptionService.getDescription();
    }

    $scope.setAfterComment = function() {
        descriptionService.setAfterComment($scope.afterComment);           
        $scope.description = descriptionService.getDescription();
    }

    $scope.setSkillDescription = function() {
        descriptionService.setSkillDescription($scope.skillDescription);
    }
    
    $scope.setYYear = function() {
        descriptionService.setYYear($scope.year);
    }

    $scope.addBCItem = function() {
        if ($scope.beforeComment != "")
            $scope.beforeComment += "\n";
        $scope.beforeComment += $scope.bcItem;

        $scope.setBeforeComment();
    }

    $scope.clearBCItem = function() {
        $scope.beforeComment = "";
        $scope.setBeforeComment();
    } 

    $scope.addACItem = function() {
        if ($scope.afterComment != "")
            $scope.afterComment += "\n";
        $scope.afterComment += $scope.acItem;

        $scope.setAfterComment();
    }

    $scope.clearACItem = function() {
        $scope.afterComment = "";
        $scope.setAfterComment();
    } 
});
