
document.addEventListener("DOMContentLoaded", e => {
let deleteMode = false

//target the delete button
const deleteButton = document.querySelector("#delete");

//create a cancel button and give it properties
const cancelButton = document.createElement("button")
cancelButton.setAttribute("id", "cancelButton")
cancelButton.innerText = "Cancel";


//helper function to remove the checkboxes, revert delete button
const removeDelete = () => {
  cancelButton.remove()
  const deleteCheckBoxes = document.querySelectorAll(".checkBoxes")
  deleteCheckBoxes.forEach(checkBox => {
    checkBox.remove();
  })
  deleteButton.innerText = "Delete a Hauntlist"
}

// let checkBoxes = document.querySelector(".hide");  //do we need this?

//toggle delete mode
  deleteButton.addEventListener("click", event => {
    deleteMode ? (deleteMode = false) : (deleteMode = true)

    if (deleteMode) {
      //alert("Select lists to delete")
      document.getElementsByTagName("h2")[0].innerText += "\n(Select lists to delete)";


      deleteButton.innerText = "Confirm" //delete becomes save

      //adds cancel button in delete mode
      const deleteButtonsDiv = document.querySelector("#deleteButtons");
        deleteButtonsDiv.append(cancelButton);

      // grabs each hauntlist and appends checkboxes to them
      const checkBoxLis = document.querySelectorAll(".checkBoxes-line li");
      checkBoxLis.forEach(checkBoxLi =>{
        const seeCheckBox = document.createElement('input');
        seeCheckBox.type = "checkbox"
        seeCheckBox.classList = "preChecked";
        seeCheckBox.setAttribute("id", checkBoxLi.getAttribute("id") + "-checkbox");  // this is coming up as null -checkbox
        checkBoxLi.append(seeCheckBox);

      });
    }

    const getUserId = async () => {
      const userURL = await document.URL.split("/");
      return userURL[userURL.length - 1];
    };

    if(!deleteMode){

      const allCheckBoxes = document.querySelectorAll(".preChecked")
      // console.log("ALLL THE BOXXXESSSSSSSS", allCheckBoxes)
      allCheckBoxes.forEach(checkBox => {
          // console.log("This is a node of all thecheckboxes:", checkBox)

        if (checkBox.checked) {
          // console.log("YO, I'M TOTALLY CHECKED RN")

          const deleteHauntList = async () => {
            const userId = await getUserId();
            const hauntListId = checkBox.id.split("-")[0]
            // console.log("THIS IS THE HAUNTLIST ID:", hauntListId);
            // const userId =
            const res = await fetch("/hauntlists/" + hauntListId, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ hauntListId }),
            })
          };
          deleteHauntList();
        }
      });
      removeDelete();
    }

  })


    // if checked, give classname of '.checked"'

    // make variable of all checked via querySlectorAll

    // for each this variable

    // make async func


    // outside async func, call async func

    // outside forEach, call removeDelete






 })
