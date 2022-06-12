document.addEventListener("DOMContentLoaded", e => {
  let deleteMode = false;

  //target the delete button
  const deleteButton = document.querySelector("#delete");

  //create a cancel button and give it properties
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("id", "cancelButton");
  cancelButton.innerText = "Cancel";

  const ogText = document.getElementsByTagName("h2")[0].innerText;

  //create popup
  const popup = document.querySelector("#createHauntlistPopup");
  const openPopupButton = document.querySelector("#create");
  const closePopupButton = document.querySelector("#closePopup");
  const newHauntlistButton = document.querySelector("#newHauntlistButton");
  const hauntlistInput = document.querySelector("#newHauntlistInput");
  const errorList = document.querySelector("#errors");

  const clearInputErrors = () => {
    //remove all error child elements
    while (errorList.firstChild) {
      errorList.removeChild(errorList.firstChild);
    }
  };

  openPopupButton.addEventListener("click", e => {
    e.stopPropagation();
    clearInputErrors();
    //clear input value
    hauntlistInput.innerText = "";
    popup.classList.remove("hide");
  });

  closePopupButton.addEventListener("click", e => {
    popup.classList.add("hide");
  });

  window.addEventListener("click", e => {
    if (e.target == popup) popup.classList.add("hide");
  });

  //create a hauntlist
  newHauntlistButton.addEventListener("click", async e => {
    e.preventDefault();
    clearInputErrors();

    const res = await fetch("/hauntlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: hauntlistInput.value }),
    });

    //if creation was successful
    if (res.status === 201) {
      hauntlistInput.value = "";
      popup.classList.add("hide");
    }

    //if creation was unsuccessful
    else {
      //get the error
      let { errors } = await res.json();
      errors = errors.substring(2, errors.length - 2);

      //add an element from the error
      const newError = document.createElement("li");
      newError.innerText = errors;
      errorList.appendChild(newError);
    }
  });

  //helper function to remove the checkboxes, revert delete button
  const removeDelete = () => {
    // console.log("I MADE ITTTTTTTTTTT :DDDDDDDD");
    cancelButton.remove();

    const deleteCheckBoxes = document.querySelectorAll(".preChecked");
    deleteCheckBoxes.forEach(checkBox => {
      checkBox.remove();

      //revert the
      document.getElementsByTagName("h2")[0].innerText = ogText;

      //remove all lis with a checked check box

      const list = document.querySelectorAll("li");
      const checked = document.querySelectorAll(":checked");

      list.forEach(li => {
        checked.forEach(checked => {
          if (li.contains(checked)) li.remove();
        });
      });
    });
    deleteButton.innerText = "Delete a Hauntlist";
  };

  // let checkBoxes = document.querySelector(".hide");  //do we need this?

  //toggle delete mode
  deleteButton.addEventListener("click", event => {
    e.stopPropagation();
    deleteMode ? (deleteMode = false) : (deleteMode = true);

    if (deleteMode) {
      //alert("Select lists to delete")

      //Not selecting correctly
      // document.getElementsByTagName("h2")[0].innerText +=
      //   "\n(Select lists to delete)";

      deleteButton.innerText = "Confirm"; //delete becomes save

      //adds cancel button in delete mode
      const deleteButtonsDiv = document.querySelector("#deleteButtons");
      deleteButtonsDiv.append(cancelButton);

      // grabs each hauntlist and appends checkboxes to them
      const checkBoxLis = document.querySelectorAll(".checkBoxes-line li");
      checkBoxLis.forEach(checkBoxLi => {
        const seeCheckBox = document.createElement("input");
        seeCheckBox.type = "checkbox";
        seeCheckBox.classList = "preChecked";
        seeCheckBox.setAttribute(
          "id",
          checkBoxLi.getAttribute("id") + "-checkbox"
        ); // this is coming up as null -checkbox
        checkBoxLi.append(seeCheckBox);
      });
    }

    const getUserId = async () => {
      const userURL = await document.URL.split("/");
      return userURL[userURL.length - 1];
    };

    if (!deleteMode) {
      const allCheckBoxes = document.querySelectorAll(".preChecked");
      // console.log("ALLL THE BOXXXESSSSSSSS", allCheckBoxes)

      allCheckBoxes.forEach(checkBox => {
        // console.log("This is a node of all thecheckboxes:", checkBox)

        if (checkBox.checked) {
          // console.log("YO, I'M TOTALLY CHECKED RN")

          const deleteHauntList = async () => {
            const userId = await getUserId();
            const hauntListId = checkBox.id.split("-")[0];
            // console.log("THIS IS THE HAUNTLIST ID:", hauntListId);
            // const userId =
            const res = await fetch("/hauntlists/" + hauntListId, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ hauntListId }),
            });
          };
          deleteHauntList();
        }
      });
      removeDelete();
    }
  });

  cancelButton.addEventListener("click", e => {
    deleteMode ? (deleteMode = false) : (deleteMode = true);
    removeDelete();
  });
});
