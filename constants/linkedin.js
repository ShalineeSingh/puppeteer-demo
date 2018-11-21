(function () {
  var getLinkedinConstants = function () {
    var linkedin = {
      linkedin_homepage: "https://www.linkedin.com/",
      signinkey: "#login-submit",
      passwordkey: "#login-password",
      usernamekey: "#login-email",
      linkedin_search_url: "https://www.linkedin.com/search/results/people/?origin=SWITCH_SEARCH_VERTICAL",
      linkedin_username: "singh.shalinee@yahoo.com",
      linkedin_password: "Test@123",
      linkedin_work_classname: "pv-position-entity",
      linkedin_location_classname: "pv-top-card-section__location",
      linkedin_name_classname: "pv-top-card-section__name",
      linkedin_education_classname: "pv-education-entity",
      linkedin_technical_classname: "pv-skill-category-entity__name",
      linkedin_dropdown_classname: "pv-skills-section__additional-skills"
    }
    return linkedin;
  };
  module.exports = {
    getLinkedinConstants: getLinkedinConstants
  };
})();