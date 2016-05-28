import RegisterPopupView from "../views/RegisterPopup/popup"; // TODO change path to '../views'
/*
 class PopupManager {
 openLogin () {

 }
 }

 export default */

export function openLoginPopup() {

}

export function openRegistrationPopup(node) {
    console.log(node);
    const popupView = new RegisterPopupView();
    const view = popupView.render();
    node.append(view);
    $(view).find('.modal').modal('show');
    return popupView.promise;
}

export function openConfirmationPopup() {

}

