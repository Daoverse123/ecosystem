import React from "react";
import { playfair, inter } from ".";

const Ring = ({ no }: { no: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="105"
      fill="none"
      viewBox="0 0 105 105"
      className={`spin-${no}`}
    >
      <g filter="url(#filter0_i_11353_33652)">
        <path
          fill="url(#paint0_linear_11353_33652)"
          d="M9.977 37.354c0 .08-.021.159-.061.228l-.787 1.362c-.017.03-.062.018-.062-.017 0-10.452 0-15.678 2.034-19.67a18.662 18.662 0 018.156-8.156c1.729-.881 3.69-1.38 6.206-1.664a.45.45 0 01.429.69.47.47 0 01-.34.216c-2.445.276-4.285.755-5.882 1.569a17.754 17.754 0 00-7.759 7.758c-.94 1.846-1.434 4.018-1.684 7.074l-.013.166c-.028.366-.053.743-.075 1.133-.143 2.51-.16 5.532-.162 9.311z"
        ></path>
        <path
          fill="url(#paint1_linear_11353_33652)"
          d="M20.16 23.467c.084-.145-.079-.307-.224-.223a4.508 4.508 0 00-1.65 1.65l-8.31 14.393-.91 1.575-.967 1.676c-1.682 2.914-3.094 5.359-4.242 7.484a1.02 1.02 0 00-.026.922c.11.232.436.237.557.01 1.183-2.217 2.676-4.803 4.499-7.961L20.16 23.467z"
        ></path>
        <path
          fill="url(#paint2_linear_11353_33652)"
          d="M9.976 66.073c0 3.647 0 6.632.085 9.144a.312.312 0 01-.488.27 1.02 1.02 0 01-.438-.812c-.068-2.414-.068-5.237-.068-8.602V45.699c0-.791.208-1.568.603-2.254.084-.145.306-.086.306.082v22.546z"
        ></path>
        <path
          fill="url(#paint3_linear_11353_33652)"
          d="M94.861 28.043a53.235 53.235 0 011.08.726c2.522 1.745 4.156 3.258 5.285 4.995a17.754 17.754 0 012.84 10.599c-.094 1.79-.599 3.623-1.583 5.878a.473.473 0 00.016.402.45.45 0 00.813-.026c1.013-2.321 1.561-4.269 1.662-6.207a18.668 18.668 0 00-2.985-11.14c-2.44-3.759-6.966-6.372-16.018-11.598-.03-.017-.063.016-.046.046l.787 1.362c.04.07.097.127.166.167 3.273 1.892 5.881 3.418 7.983 4.796z"
        ></path>
        <path
          fill="url(#paint4_linear_11353_33652)"
          d="M95.023 38.927c0-3.646 0-6.632-.084-9.144a.312.312 0 01.488-.27c.267.186.43.487.438.812.068 2.415.068 5.237.068 8.602V59.315c0 .782-.206 1.55-.597 2.227l-.007.013c-.084.145-.305.086-.305-.082V38.927z"
        ></path>
        <path
          fill="url(#paint5_linear_11353_33652)"
          d="M96.113 62.008c1.823-3.158 3.316-5.744 4.498-7.962a.312.312 0 01.558.01c.139.295.128.637-.026.923-1.148 2.124-2.559 4.567-4.24 7.48h-.001l-.001.003-10.187 17.644a4.509 4.509 0 01-1.65 1.65c-.145.084-.308-.078-.224-.223l11.273-19.526z"
        ></path>
        <path
          fill="url(#paint6_linear_11353_33652)"
          d="M95.023 67.646c0-.08.021-.159.061-.228l.786-1.362c.018-.03.063-.017.063.017 0 4.162 0 7.496-.128 10.253-.019.39-.04.771-.063 1.14-.23 3.557-.734 6.1-1.843 8.277a18.662 18.662 0 01-8.156 8.156c-1.73.881-3.69 1.38-6.206 1.664a.45.45 0 01-.43-.69.47.47 0 01.34-.216c2.446-.276 4.286-.754 5.883-1.568a17.753 17.753 0 007.758-7.759c.941-1.846 1.435-4.018 1.684-7.073.225-2.752.249-6.155.251-10.611z"
        ></path>
        <path
          fill="url(#paint7_linear_11353_33652)"
          d="M76.957 94.862c1.378-2.102 2.905-4.711 4.796-7.984a.458.458 0 01.167-.166l1.362-.787c.03-.017.063.017.046.046-5.226 9.052-7.84 13.578-11.597 16.018a18.654 18.654 0 01-11.141 2.985c-1.938-.101-3.886-.649-6.207-1.662a.45.45 0 01-.026-.812.469.469 0 01.402-.016c2.255.983 4.088 1.488 5.878 1.582a17.754 17.754 0 0010.599-2.84c1.738-1.128 3.25-2.762 4.995-5.284a45.987 45.987 0 00.726-1.08z"
        ></path>
        <path
          fill="url(#paint8_linear_11353_33652)"
          d="M23.467 84.84c-.145-.084-.307.079-.223.224a4.51 4.51 0 001.65 1.65l14.392 8.31 1.576.91 1.676.967c2.914 1.682 5.358 3.094 7.483 4.242.286.155.628.165.922.026a.311.311 0 00.011-.557c-2.218-1.183-4.803-2.676-7.962-4.499L23.468 84.84z"
        ></path>
        <path
          fill="url(#paint9_linear_11353_33652)"
          d="M75.486 95.427a1.02 1.02 0 01-.811.438c-2.415.068-5.238.068-8.602.068H45.019c-.346 0-.686-.09-.985-.264l-.59-.34c-.144-.083-.085-.305.083-.305h22.546c3.646 0 6.632 0 9.144-.085a.312.312 0 01.27.488z"
        ></path>
        <path
          fill="url(#paint10_linear_11353_33652)"
          d="M9.258 77.466c-2.966-1.977-4.917-3.686-6.247-5.735a18.663 18.663 0 01-2.985-11.14c.101-1.939.649-3.887 1.662-6.208a.45.45 0 01.812-.026.47.47 0 01.017.402c-.984 2.256-1.49 4.089-1.583 5.879a17.753 17.753 0 002.84 10.598c1.128 1.738 2.762 3.25 5.284 4.995 2.27 1.57 5.206 3.292 9.064 5.523.069.04.127.097.166.166l.787 1.362c.017.03-.016.063-.046.046-3.605-2.081-6.492-3.748-8.815-5.237a64.39 64.39 0 01-.956-.625z"
        ></path>
        <path
          fill="url(#paint11_linear_11353_33652)"
          d="M9.437 79.537a.45.45 0 01.69-.429.47.47 0 01.216.34c.276 2.445.755 4.285 1.568 5.882a17.754 17.754 0 007.759 7.759c1.846.94 4.018 1.434 7.073 1.683l.167.014.096.007c.335.026.681.048 1.037.069 2.51.142 5.531.16 9.311.162.08 0 .159.02.228.06l1.364.788c.029.017.017.061-.017.061h-.002c-10.452 0-15.678 0-19.67-2.034a18.662 18.662 0 01-8.156-8.156c-.881-1.729-1.38-3.69-1.664-6.206z"
        ></path>
        <path
          fill="url(#paint12_linear_11353_33652)"
          d="M66.056 9.13c-.03-.018-.018-.063.017-.063 4.162 0 7.496 0 10.252.128h.005c.39.019.768.04 1.136.063 3.557.23 6.1.734 8.277 1.843a18.662 18.662 0 018.156 8.156c.881 1.73 1.38 3.69 1.664 6.206a.45.45 0 01-.69.43.47.47 0 01-.216-.34c-.276-2.446-.755-4.286-1.569-5.883a17.754 17.754 0 00-7.758-7.759c-1.846-.94-4.018-1.434-7.074-1.683a46.753 46.753 0 00-1.298-.09c-2.51-.142-5.532-.16-9.313-.161a.457.457 0 01-.227-.061l-1.362-.786z"
        ></path>
        <path
          fill="url(#paint13_linear_11353_33652)"
          d="M26.91 10.214c.211-.33.419-.648.624-.956 1.977-2.966 3.686-4.916 5.735-6.247A18.663 18.663 0 0144.41.026c1.938.101 3.886.65 6.207 1.662a.45.45 0 01.026.813.47.47 0 01-.402.016c-2.256-.984-4.089-1.489-5.879-1.583a17.753 17.753 0 00-10.598 2.84c-1.738 1.129-3.25 2.763-4.995 5.284-1.57 2.27-3.292 5.206-5.522 9.064a.459.459 0 01-.167.167l-1.362.786c-.03.017-.063-.016-.046-.046 2.081-3.604 3.748-6.491 5.237-8.815z"
        ></path>
        <path
          fill="url(#paint14_linear_11353_33652)"
          d="M80.106 18.286a4.508 4.508 0 011.65 1.65c.084.145-.078.308-.224.224L63.894 9.977l-1.887-1.09c-3.158-1.823-5.744-3.316-7.961-4.498a.312.312 0 01.01-.558 1.02 1.02 0 01.922.026c2.125 1.149 4.57 2.56 7.484 4.242l17.644 10.187z"
        ></path>
        <path
          fill="url(#paint15_linear_11353_33652)"
          d="M38.926 9.067h-.001c-3.364 0-6.186 0-8.6.068a1.02 1.02 0 00-.812.438.312.312 0 00.27.489c2.512-.085 5.498-.085 9.144-.085h22.546c.167 0 .227-.222.082-.306a4.508 4.508 0 00-2.255-.604H38.927z"
        ></path>
        <path
          fill="url(#paint16_linear_11353_33652)"
          d="M20.704 20.705l-1.675.967c-2.914 1.683-5.358 3.094-7.416 4.36a1.02 1.02 0 00-.483.785c-.021.256.26.425.477.289 2.133-1.33 4.719-2.823 7.877-4.646l19.525-11.273c.145-.084.086-.306-.082-.306-.784 0-1.565.207-2.245.6L22.28 19.794l-1.576.91z"
        ></path>
        <path
          fill="url(#paint17_linear_11353_33652)"
          d="M.026 44.41c.128 2.44.963 4.895 2.543 8.09.163.331.335.671.515 1.02 1.268 2.45 2.934 5.338 5.015 8.942.018.03.063.018.063-.017v-1.572a.458.458 0 00-.061-.228c-2.226-3.86-3.907-6.82-5.088-9.314-1.312-2.772-1.97-4.899-2.079-6.968a17.753 17.753 0 012.84-10.599c.976-1.503 2.33-2.838 4.31-4.3a.47.47 0 00.187-.356.45.45 0 00-.717-.383c-2.038 1.504-3.486 2.916-4.543 4.544A18.663 18.663 0 00.026 44.41z"
        ></path>
        <path
          fill="url(#paint18_linear_11353_33652)"
          d="M94.119 38.927c0 .168-.222.227-.306.082L83.63 21.371l-.91-1.576-.18-.311c-1.823-3.158-3.316-5.744-4.645-7.877a.312.312 0 01.288-.477c.324.026.615.206.785.483 1.266 2.058 2.678 4.502 4.36 7.416l10.423 18.053c.24.417.368.891.368 1.373v.472z"
        ></path>
        <path
          fill="url(#paint19_linear_11353_33652)"
          d="M85.205 82.72l-1.576.91-17.638 10.183c-.145.084-.086.306.082.306.791 0 1.569-.209 2.254-.604l17.644-10.187c2.914-1.682 5.359-3.094 7.416-4.36a1.02 1.02 0 00.484-.785.312.312 0 00-.478-.288c-2.133 1.329-4.719 2.822-7.877 4.645l-.311.18z"
        ></path>
        <path
          fill="url(#paint20_linear_11353_33652)"
          d="M101.916 53.52l.071.15c1.312 2.77 1.971 4.898 2.079 6.968a17.754 17.754 0 01-2.84 10.598c-.976 1.503-2.33 2.838-4.31 4.3a.47.47 0 00-.187.356.45.45 0 00.717.383c2.038-1.503 3.486-2.916 4.543-4.544a18.654 18.654 0 002.985-11.14c-.234-4.475-2.847-9.001-8.073-18.053-.017-.03-.063-.018-.063.017v1.572c0 .08.021.159.061.228 1.888 3.274 3.384 5.9 4.516 8.145.175.349.342.688.501 1.02z"
        ></path>
        <path
          fill="url(#paint21_linear_11353_33652)"
          d="M51.33 101.987l.15-.071c.332-.158.671-.325 1.02-.501 2.244-1.131 4.87-2.628 8.145-4.516a.457.457 0 01.228-.06h1.573c.034 0 .046.045.016.062-9.052 5.226-13.577 7.839-18.052 8.073a18.654 18.654 0 01-11.14-2.985c-1.629-1.057-3.041-2.505-4.545-4.543a.45.45 0 01.383-.717.47.47 0 01.357.188c1.462 1.979 2.796 3.333 4.3 4.309a17.754 17.754 0 0010.598 2.84c2.07-.108 4.196-.767 6.968-2.079z"
        ></path>
        <path
          fill="url(#paint22_linear_11353_33652)"
          d="M20.705 84.296l.967 1.675c1.683 2.914 3.094 5.359 4.36 7.416.17.277.461.457.785.484a.312.312 0 00.289-.478c-1.33-2.133-2.823-4.719-4.646-7.877L11.187 65.991c-.084-.145-.306-.086-.306.082 0 .785.207 1.566.6 2.245l8.314 14.402.91 1.576z"
        ></path>
        <path
          fill="url(#paint23_linear_11353_33652)"
          d="M51.48 3.085c-2.45 1.267-5.338 2.933-8.942 5.014-.03.018-.017.063.017.063h1.572c.08 0 .16-.021.228-.061 3.86-2.226 6.82-3.907 9.315-5.088 2.77-1.312 4.898-1.97 6.968-2.079a17.753 17.753 0 0110.598 2.84c1.503.976 2.838 2.33 4.3 4.31a.47.47 0 00.356.187.45.45 0 00.383-.717c-1.503-2.038-2.916-3.486-4.544-4.543A18.663 18.663 0 0060.591.026c-2.44.128-4.896.963-8.091 2.543-.331.164-.671.336-1.02.516z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_11353_33652"
          width="105.332"
          height="105"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.332"></feOffset>
          <feGaussianBlur stdDeviation="0.332"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.441667 0 0 0 0 0.709501 0 0 0 0 1 0 0 0 0.58 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_11353_33652"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint11_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint17_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint21_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint23_linear_11353_33652"
          x1="94.5"
          x2="30"
          y1="87.5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BCBFFF"></stop>
          <stop offset="1" stopColor="#D094FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Sec4 = () => {
  return (
    <section className=" flex gap-[52px] justify-center py-[90px] max-[1200px]:py-[36px]  max-[1200px]:flex-col max-[1200px]:items-center">
      <span className="max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:items-center max-[1200px]:w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="147"
          height="147"
          fill="none"
          viewBox="0 0 147 147"
        >
          <path
            stroke="url(#paint0_linear_11444_35126)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8.647"
            d="M73.5 128.625c30.445 0 55.125-24.68 55.125-55.125S103.945 18.375 73.5 18.375 18.375 43.055 18.375 73.5s24.68 55.125 55.125 55.125z"
          ></path>
          <path
            fill="url(#paint1_linear_11444_35126)"
            d="M52.828 71.203a9.188 9.188 0 100-18.375 9.188 9.188 0 000 18.375z"
          ></path>
          <path
            fill="url(#paint2_linear_11444_35126)"
            d="M94.172 71.203a9.187 9.187 0 009.187-9.187 9.187 9.187 0 10-18.375 0 9.188 9.188 0 009.188 9.187z"
          ></path>
          <path
            stroke="url(#paint3_linear_11444_35126)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8.647"
            d="M97.369 87.281a27.62 27.62 0 01-47.775 0"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_11444_35126"
              x1="73.5"
              x2="73.5"
              y1="18.375"
              y2="128.625"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BCBFFF"></stop>
              <stop offset="1" stopColor="#D094FF"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_11444_35126"
              x1="52.828"
              x2="52.828"
              y1="52.828"
              y2="71.203"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BCBFFF"></stop>
              <stop offset="1" stopColor="#D094FF"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_11444_35126"
              x1="94.172"
              x2="94.172"
              y1="52.828"
              y2="71.203"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BCBFFF"></stop>
              <stop offset="1" stopColor="#D094FF"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_11444_35126"
              x1="73.481"
              x2="73.481"
              y1="87.281"
              y2="101.036"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BCBFFF"></stop>
              <stop offset="1" stopColor="#D094FF"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h1
          className={
            "mt-6 max-[1200px]:mt-3 text-[48px] font-medium leading-[64px] max-[1200px]:text-center max-[1200px]:text-[32px]" +
            ` ${playfair.className}`
          }
        >
          Benefits for Businesses
        </h1>
        <p
          className={
            "mt-[24px] max-[1200px]:mt-3 max-w-[558px] text-[18px] text-[#6B6B7F] font-normal leading-[27px] max-[1200px]:text-[16px] max-[1200px]:max-w-[350px] max-[1200px]:text-center" +
            ` ${inter.className}`
          }
        >
          Simple step-by-step guide on how businesses can get listed and earn
          reviews to access Truts Packages.
        </p>
      </span>
      <div className="flex flex-col gap-[42px]">
        {[1, 2, 3, 4].map((ele, key) => {
          return (
            <span
              key={"save" + ele}
              className="flex gap-[32px] items-center max-[1200px]:scale-75"
            >
              <span className="flex relative w-[105px] h-[105px]">
                <Ring no={ele} />
                <h1
                  className={
                    "flex text-[60px] text-[#5C657D] justify-center items-center w-full h-min mb-4 absolute left-0 right-0 top-0 bottom-0 m-auto" +
                    ` ${playfair.className}`
                  }
                >
                  {key + 1}
                </h1>
              </span>
              <span>
                <h1
                  className={
                    "text-[32px] leading-3 font-medium" +
                    ` ${playfair.className}`
                  }
                >
                  Save Money
                </h1>
                <p
                  className={
                    "mt-[24px] max-w-[558px] text-[16px] text-[#6B6B7F] font-normal leading-[27px]" +
                    ` ${inter.className}`
                  }
                >
                  Something about point 1 with proper description
                </p>
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Sec4;
