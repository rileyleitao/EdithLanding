<template>
    <!-- mimiced after https://www.tailwindawesome.com/resources/ada/demo-->
    <body class="bg-white ">
    <main class="overflow-hidden">
        <section class="bg-[url('https://firebasestorage.googleapis.com/v0/b/edith-79deb.appspot.com/o/gradient.png?alt=media&token=84cc6433-2e97-48a0-8705-0dfcf9b69046')] bg-cover bg-center h-full sm:h-auto">
            
            <div class="relative pt-24 lg:pt-28 ">
                <div class="mx-auto px-6 max-w-7xl md:px-12">
                    <div class="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                        <a href="https://cal.com/edithmedical/30min" class="border rounded-lg w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] p-1 group gap-2">
                            <span class="inline-flex items-center rounded-md bg-blue-600 px-2 py-1 text-xs font-bold text-white ring-1 ring-inset ring-blue-700/10">New</span>
                            <span class="text-sm font-medium text-gray-700  flex gap-6">
                                Introducing Edith
                                <div class="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                                    <span class="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-4 text-gray-950 -translate-x-2 transition duration-300 group-hover:translate-x-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </span>
                        </a>
                        <h1 class="mt-8 text-wrap text-4xl md:text-5xl font-bold tracking-tight text-gray-950  xl:text-5xl xl:[line-height:1.125]">Your Digital Medical Scribe</h1>
                        <p class="text-wrap mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-800 hidden sm:block">Focus on Patients, not Paperwork.</p>
                        <p class="text-wrap mx-auto mt-6 max-w-2xl text-gray-800 sm:hidden">Focus on Patients, not Paperwork.</p>
                        <div class="mt-8 flex flex-col items-center justify-center gap-4">
                            <a href="https://cal.com/edithmedical/30min" @click="getStartedButtonTop" target="blank">
                            <button class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <span class="text-nowrap">Book a Demo</span>
                            </button>
                        </a>
                        </div>
                            <!-- Add Pipeda images here-->
                            <div class="flex justify-center mt-12">
                            <img class="mr-6" src="@/assets/PIPEDA.svg">
                            <img src="@/assets/HIPAA.svg">
                        </div>

                    </div>
                </div>
            </div>

            <div class="max-w-screen-md mx-auto pt-16">
            <img class=" w-full max-w-[75vw] h-auto mx-auto rounded-lg shadow-lg" src="@/assets/HeroImage.png" alt="hero-img" />
        </img>
        </div>
        </section>
        <section class="pt-48">
            <div>
                <div class="mx-auto px-6 max-w-6xl text-gray-500">
                    <div class="relative">
                        <div class="relative z-10 grid gap-3 grid-cols-6">
                            <div class="col-span-full lg:col-span-2 overflow-hidden flex relative rounded-xl border-gray-200 rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color]">
                                <div class="size-fit m-auto relative">
                                    <div class="relative h-24 w-56 flex items-center">
                                        <svg class="absolute inset-0 size-full text-gray-400" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"/>
                                        </svg>
                                        <span class="w-fit block mx-auto text-5xl font-semibold bg-clip-text text-transparent text-gradient bg-gradient-to-br from-blue-500 to-purple-500 ">100%</span>
                                    </div>
                                    <h2 class="mt-6 text-center font-semibold text-gray-950  text-3xl">Customizable</h2>
                                </div>
                            </div>
                            <div class="col-span-full rounded-xl border-gray-200 sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color]">
                                <div class="p-6">
                                    <div class="relative aspect-square rounded-full size-32 flex border mx-auto   ">
                                        <svg class="w-24 m-auto h-fit" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="text-gray-400" d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z" fill="currentColor"/>
                                            <g clip-path="url(#clip0_0_1)">
                                                <path d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z" fill="url(#paint0_linear_0_1)"/>
                                            </g>
                                            <path class="text-primar" d="M3 72H209" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_0_1" x1="106.385" y1="1.34375" x2="106" y2="72" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" stop-opacity="0" style="stop-color:none;stop-opacity:0;"/>
                                            <stop class="text-primary" offset="1" stop-color="currentColor"/>
                                            </linearGradient>
                                            <clipPath id="clip0_0_1">
                                            <rect width="129" height="72" fill="white" style="fill:white;fill-opacity:1;" transform="translate(41)"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="mt-6 text-center relative z-10 space-y-2">
                                        <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 ">Secure by default</h2>
                                        <p class=" text-gray-700">By utilization end to end encryption, we ensure patient data is secure and protected. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full rounded-xl border-gray-200 sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color]">
                                <div>
                                    <div class="pt-6 lg:px-6">
                                        <img class ="w-full" src="@/assets/growUsers.svg">
                                    </div>
                                    <div class="mt-8 p-6 text-center relative z-10 space-y-2">
                                        <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 ">More Clients With Less</h2>
                                        <p class="text-gray-700">Grow your client base with less time spent on charting.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full rounded-xl border-gray-200 lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color]">
                                <div class="grid p-6 sm:grid-cols-2">
                                    <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                        <div class="relative aspect-square rounded-full size-12 flex border  before:absolute before:-inset-2 before:border before:rounded-full">
                                            <svg class="size-6 m-auto justify-center align-center" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                            </svg>
                                         </div>
                                        <div class="space-y-2">
                                            <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 ">Improved Note Accuracy</h2>
                                            <p class=" text-gray-700">Leave no detail behind. Capture every detail, synthezised into a report automatically.</p>
                                        </div>
                                    </div>
                                    <div class="relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)]">
                                        <div class="absolute flex gap-1 top-2 left-3">
                                        </div>
                                        <img src="@/assets/scribble.jpg">
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-full lg:col-span-3 rounded-xl border-gray-200 overflow-hidden relative bg-white border ">
                                <div class="h-full p-6 grid sm:grid-cols-2">
                                    <div class="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                         <div class="relative aspect-square rounded-full size-12 flex border before:absolute before:-inset-2 before:border before:rounded-full">
                                            <svg class="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <g fill="none">
                                                    <path stroke="currentColor" d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"/>
                                                    <path fill="currentColor" fill-rule="evenodd" d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0" clip-rule="evenodd"/>
                                                </g>
                                            </svg>
                                         </div>
                                        <div class="space-y-2">
                                            <h2 class="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 ">Integrated Scheduling</h2>
                                            <p class=" text-gray-700">Integrated scheduling software to ensure you never miss a client and your busy day is organized.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-32">
            <div>
                <div class="mx-auto px-6 max-w-6xl text-gray-500">
                    <div class="text-center">
                        <h2 class="text-3xl text-gray-950  font-semibold">Take your clinic into the future.</h2>
                        <p class="mt-6 text-gray-700 ">Leverage cutting edge Artifical Intelligence.</p>
                        <p class="mt-6 text-gray-700 ">The results speak for themselves. </p>
                    </div>
                </div>
            </div>
                <div class="bg-white py-16 sm:py-32">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt class="lg:text-xl lg:font-bold sm:font-medium leading-7 text-gray-800">{{ stat.name }}</dt>
                        <dd class="order-first lg:text-6xl text-5xl font-bold tracking-tight text-primary ">{{ stat.value }}</dd>
                        </div>
                    </dl>
                    </div>
                </div>
        </section>
        <section >
    <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="lg:max-w-lg">
              <p class="text-base font-semibold leading-7 text-indigo-600">Modernize Your Medical Practice</p>
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Edith AI: Revolutionizing Medical Transcription and Clinic Management</h1>
              <p class="mt-6 text-xl leading-8 text-gray-700">Edith AI is a medical transcription service designed to streamline clinical note-taking for healthcare professionals, bringing clinic software into the 21st century. Our platform allows you to book patients, create report templates, record sessions, and auto-generate reports with ease. Follow up with patients and securely provide their medical information, making the management of medical clinics simpler than ever.</p>
            </div>
          </div>
        </div>
        <div class="-mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img class="w-full max-w-[75vw] h-auto mx-auto rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:max-w-[75vw]" src="@/assets/HeroImage.png" alt="" />
        </div>
        <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div class="lg:pr-4">
            <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Note Taking</h2>
              <p class="mt-6">Our proprietary artificial intelligence model reduces the workload of note-taking without the need to hire a scribe. Edith AI listens to conversations and takes notes for you, providing full transcriptions that can be edited as needed. Our model boasts a 96%+ accuracy rate, specifically tailored to the clinical environment.</p>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Report Creation</h2>
              <p class="mt-6">Leverage custom reports through our report generator. Create report templates effortlessly, which are then integrated into our intelligence layer. This ensures that any session is automatically turned into a report for easy filing.</p>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Patient Management</h2>
              <p class="mt-6">Maintain a comprehensive record of your patients. View and update patient information, access important details, and tag patients with specific keywords to quickly prepare for your next visit.</p>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Patient Communication</h2>
              <p class="mt-6">Stay connected with patients to ensure transparency about what was discussed and the next steps. Share reports and transcripts securely with patients and referring doctors through our portal. Utilize email and text reminders to minimize missed appointments.</p>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Clinics at Scale</h2>
              <p class="mt-6">Whether managing one clinic or one hundred, Edith AI allows you to easily add and manage multiple clinics. Keep data separate while getting an overview of patient load across all clinics to better manage staffing and resources.</p>
              
              <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">Secure Data Management</h2>
              <p class="mt-6">We adhere to the strictest data privacy and protection standards, being both PIPEDA and HIPAA compliant. All sensitive data is stored locally in your clinic's home country, ensuring a highly secure data environment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>

        <section>
            <div class="bg-white">
    <div class="mx-auto max-w-7xl pb-24 sm:px-6 sm:py-12 lg:px-8 lg:mt-12">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity.<br />Start using Edith today.</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Get early access to the Beta.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a href="https://cal.com/edithmedical/30min" @click="getStartedButtonBottom" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get Started</a>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img class="absolute left-0 top-0 lg:w-[36rem] w-[35rem] max-w-[80vw] rounded-md bg-white/5 ring-1 ring-white/10" src="@/assets/HeroImage.png" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>
        </section>
    </main>
    </body>
    </template>
                    
    <script setup>
    const stats = [
    { id: 1, name: 'Reduction in Documentation Time', value: '77%' },
    { id: 2, name: 'Saved Per Day Doing Paperwork', value: '2+ Hours' },
    { id: 3, name: 'Speech to Text Accuracy', value: '96%' },
    ]
const getStartedButtonTop = () => {
  const analytics = getAnalytics();
  logEvent(analytics, 'get_started_top_button_click', { button_name: 'get_started_top_button' })
  console.log("get started Button");
};
const getStartedButtonBottom = () => {
  const analytics = getAnalytics();
  logEvent(analytics, 'get_started_bottom_button_click', { button_name: 'get_started_bottom_button' })
  console.log("get started Button");
};

definePageMeta({
  title: 'Edith AI | Revolutionizing Medical Transcription and Clinic Management',
  meta: [
    {
      name: 'description',
      content: 'Edith AI is a medical transcription service designed to streamline clinical note-taking, patient management, and report generation for healthcare professionals.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:title',
      content: 'Edith AI | Revolutionizing Medical Transcription and Clinic Management'
    },
    {
      property: 'og:description',
      content: 'Edith AI simplifies clinical note-taking, patient management, and report creation with a proprietary AI model that achieves 96%+ accuracy, saving time and resources for healthcare professionals.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.edithmedical.com'
    },
    {
      property: 'og:image',
      content: 'https://www.edithmedical.com/path-to-image.jpg' // Replace with the URL of an image representing Edith AI (e.g., logo or screenshot)
    },
    {
      property: 'og:site_name',
      content: 'Edith Medical'
    },
    {
      name: 'author',
      content: 'Edith Medical'
    },
    {
      name: 'keywords',
      content: 'medical transcription, clinic management, AI transcription, patient management, healthcare software, medical report generator, HIPAA, PIPEDA, medical AI'
    }
  ]
})

</script>