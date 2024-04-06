document.addEventListener("DOMContentLoaded", function () {
    var myPostLink = document.getElementById('myPosts');
    var FvrtPostLink = document.getElementById('fvrtPosts');
   

    myPostLink.addEventListener('click', function () {
        showSection('myPostsShow');
    });
    FvrtPostLink.addEventListener('click', function () {
        showSection('fvrtPostsShow');
    });
   

    function showSection(sectionId) {
        var sections = ['myPostsShow', 'fvrtPostsShow'];

        sections.forEach(function (section) {
            var element = document.getElementById(section);
            if (section === sectionId) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }
        });
    }
});
