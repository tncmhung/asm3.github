"use strict";

//Lấy thông tin người dùng//
const hide1 = document.querySelector(".hide1");
const hide = document.querySelector(".hide");   
const input = document.querySelector(".form-control");
const wrong = document.querySelector(".wrong-email");

function checkEmail() {
    const inputEmail = input.value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(inputEmail)) {
        wrong.textContent = "Hãy nhập địa chỉ email hợp lệ!";
        return false;
    } else {
        hide1.style.display = "none";
        hide.style.display = "block";
    }
}

//Hiện thêm//
const viewMore = document.querySelectorAll(".viewmore");
const viewLess = document.querySelectorAll(".viewless");
const hideView = document.querySelectorAll(".hideview");

function openCloseHandler(index) {
    const currentHideView = hideView[index];
    const currentViewMore = viewMore[index];
    const currentViewLess = viewLess[index];

    return function () {
        currentHideView.style.display = "block";
        currentViewLess.style.display = "block";
        currentViewMore.style.display = "none";
    };
}

function closeHandler(index) {
    const currentHideView = hideView[index];
    const currentViewMore = viewMore[index];
    const currentViewLess = viewLess[index];

    return function () {
        currentHideView.style.display = "none";
        currentViewLess.style.display = "none";
        currentViewMore.style.display = "block";
    };
}

for (let i = 0; i < viewMore.length; i++) {
    viewMore[i].addEventListener("click", openCloseHandler(i));
}

for (let a = 0; a < viewLess.length; a++) {
    viewLess[a].addEventListener("click", closeHandler(a));
}
