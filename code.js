function beginAnimation() {
    let seal = document.getElementsByClassName("seal")[0];
    seal.classList.add("remove-seal");

    setTimeout(() => {
        let papers = document.getElementsByClassName("paper");
        for (let paper of papers) {
            if (paper.classList.contains("right")) {
                paper.classList.add("paper-fold");
                paper.style.transformOrigin = "right";
            }
        }

        setTimeout(() => {
            let invite = document.getElementsByClassName("invite")[0];
            let papers = document.getElementsByClassName("paper");
            for (let paper of papers) {
                if (paper.classList.contains("left")) {
                    paper.classList.add("paper-fold");
                    paper.style.transformOrigin = "left";
                }
            }

            invite.classList.add("unblur");
        }, 1500);
    }, 1000);
}

function setup() {
    let bkg = document.getElementsByClassName("bkg")[0];
    let invite = document.createElement('img');
    invite.src = "invite.svg";
    invite.classList.add("invite");
    invite.classList.add("center");
    invite.addEventListener("load", svgLoaded);

    bkg.appendChild(invite);
}

function svgLoaded() {
    let invite = document.getElementsByClassName("invite")[0];
    let papers = document.getElementsByClassName("paper");
    for(let paper of papers) {
        if (paper.classList.contains("left")) {
            paper.style.width = getComputedStyle(invite).width;
            paper.style.left = getComputedStyle(invite).marginLeft;
        } else {
            paper.style.width = (parseInt(getComputedStyle(invite).width) * 0.5) + "px";
            let marginRight = parseInt(getComputedStyle(invite).marginRight);
            let width = parseInt(getComputedStyle(paper).width);

            paper.style.left = (marginRight + invite.clientWidth - width) + "px";
        }
    }

    let loading = document.getElementsByClassName("loading")[0];
    loading.classList.add("fade-out");
    setTimeout(() => {loading.remove()}, 1000);
} 