const template = `

<style>
    :root{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
    }

    *, *::after, *::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100dvh;
    }

    dialog{
        margin: auto;
        padding: 50px;
        border: none;
        outline: none;
        background-color: transparent;
        /* box-sizing: initial; */
    }

    .spinner{
        width: 200px;
        aspect-ratio: 1;
        position: relative;
        animation: spin 2s linear infinite;

        &::before, &::after{
            content: "";
            position: absolute;
            animation-name: grow;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        &::before{
            border-top: solid 20px red;
            border-left: solid 20px red;
        }
        &::after{
            bottom: 0;
            right: 0;
            border-bottom: solid 20px blue;
            border-right: solid 20px blue;
            animation-delay: 0.5s;
        }
    }

    @keyframes grow {
        from {
            width: 100%;
            height: 0%;
        }
        to {
            width: 0%;
            height: 100%;
        }
    }

    @keyframes spin {
        from {
            rotate: 0turn;
        }
        to {
            rotate: 0.5turn;
        }
    }

</style>
<dialog id="tDlgSpinner">
      <div class="spinner"></div>
</dialog>
`;

export function openSpinner() {
  const nDiv = document.body.appendChild(document.createElement("div"));
  nDiv.id = "tDivSpinner";
  nDiv.innerHTML = template;

  document.querySelector("dialog#tDlgSpinner").showModal();
}

export function closeSpinner() {
  document.body.removeChild(document.querySelector("div#tDivSpinner"));
  document.querySelector("dialog#tDlgSpinner").close();
}
