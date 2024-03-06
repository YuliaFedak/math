let pagination = ""
let numberOfExercise = 22;
for (let i = 1; i <= numberOfExercise; i++) {
    pagination += "<li class='page-item'><a id='" + i +"' class='page-link'>" + i + "</a></li>"

}
document.getElementById("pagination").innerHTML = pagination;