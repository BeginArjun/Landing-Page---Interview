/* 
Contains Two Component
Light Rocket
Dark Rocket
*/
'use client'
import { motion } from "framer-motion"
export const Light=()=>{
    return(
        <svg width="70" height="72" viewBox="0 0 70 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
            animate={{translateY:[0,5,0]}}
            transition={{duration:3,repeat:Infinity}}
            d="M36.784 32.7099C39.6523 34.3659 43.7702 32.6096 45.9802 28.7817C48.1902 24.9539 47.6523 20.5095 44.784 18.8535C41.9158 17.1975 37.7979 18.9539 35.5879 22.7817C33.3779 26.6096 33.9158 31.0539 36.784 32.7099Z" fill="url(#paint0_linear_312_1042)" />
            <motion.path
            animate={{translateY:[0,5,0],translateX:[0,2,2.1,-2,-2.1,0]}}
            transition={{duration:3,repeat:Infinity}}
            d="M48.8582 43.4248C54.9587 31.2984 56.5189 22.4119 56.3405 16.249C56.2318 12.6852 55.5434 10.0615 54.8453 8.28671C54.5752 7.58934 54.2495 6.91478 53.8715 6.26951C53.762 6.08266 53.6456 5.89993 53.5226 5.72171C53.3378 5.42562 53.0847 5.17814 52.7846 5C52.4583 4.81764 52.0909 4.72156 51.7172 4.72088C51.5 4.71093 51.2826 4.70864 51.0653 4.71401C50.3106 4.7311 49.5583 4.80637 48.8152 4.93916C46.9175 5.26611 44.2855 6.03284 41.1373 7.7578C35.7047 10.7273 28.8084 16.4961 21.4799 27.6133L12.6422 30.9447L12.6183 30.954C10.5028 31.7803 8.73155 33.3021 7.596 35.269L1 46.6936C0.790119 47.0571 0.699936 47.4775 0.742229 47.8951C0.784522 48.3127 0.957147 48.7065 1.23565 49.0205C1.51415 49.3346 1.88441 49.5531 2.29398 49.645C2.70355 49.737 3.13167 49.6977 3.51769 49.5328L10.4148 46.5867C11.4338 46.1496 12.6697 46.041 14.1598 46.1161C15.1171 46.17 15.9779 46.279 16.8869 46.3927L17.7408 46.4977C19.3096 49.3804 21.8401 51.7974 24.7846 53.4974C27.7291 55.1974 31.0876 56.1804 34.3684 56.0977C34.5405 56.3357 34.7137 56.5557 34.8814 56.7773C35.4393 57.515 35.9641 58.206 36.4894 59.0081C37.2995 60.261 37.8234 61.3856 37.9544 62.4867L38.8515 69.9328C38.9017 70.3496 39.0818 70.74 39.3662 71.0487C39.6506 71.3574 40.025 71.5688 40.4362 71.653C40.8474 71.7371 41.2747 71.6898 41.6576 71.5176C42.0404 71.3454 42.3593 71.0571 42.5692 70.6936L49.1652 59.269C50.3008 57.3021 50.7331 55.0073 50.3909 52.7621L48.8582 43.4248ZM45.751 49.1826L45.641 49.3731C43.909 52.373 41.4872 54.2957 38.7629 55.2863C39.1407 55.8 39.5145 56.3206 39.8372 56.8256C40.7942 58.288 41.6885 60.0191 41.9277 62.0047L42.1051 63.4974L45.7011 57.269C46.3806 56.0923 46.6405 54.7197 46.4384 53.376L45.751 49.1826ZM16.2463 42.2863C15.742 39.4317 16.1962 36.373 17.9282 33.3731L18.0362 33.186L14.0649 34.6806C12.7988 35.1779 11.7393 36.0905 11.0601 37.269L7.4641 43.4974L8.84352 42.9082C10.6828 42.1226 12.631 42.028 14.376 42.1256C14.9728 42.1561 15.6125 42.216 16.2463 42.2863ZM50.6698 8.73498C50.808 8.99955 50.9668 9.34061 51.1267 9.75163C51.6585 11.1025 52.2507 13.2688 52.3425 16.3657C52.5154 22.5623 50.7029 32.6056 42.1769 47.3731C40.4609 50.3453 37.9213 51.7519 35.1243 52.0446C32.4677 52.326 29.4901 51.5953 26.7846 50.0333C24.0791 48.4713 21.9576 46.258 20.873 43.8166C19.7264 41.2425 19.6763 38.3453 21.3923 35.3731C29.7563 20.8862 37.5434 14.2785 43.0576 11.2637C45.8144 9.76073 48.0275 9.13551 49.4943 8.88306C49.958 8.79979 50.3512 8.75887 50.6698 8.73498Z" fill="url(#paint1_linear_312_1042)" />
            <motion.path
            animate={{translateY:[0,3,0]}}
            transition={{duration:3,repeat:Infinity}}
             d="M27.1858 58.7051C25.337 58.0672 23.513 57.2266 21.7844 56.2286C20.0523 55.2286 18.4157 54.0712 16.939 52.7891L17.7987 59.9319C17.8359 60.2402 17.9443 60.5355 18.1153 60.7947C18.2864 61.0538 18.5155 61.2695 18.7844 61.4247C19.0533 61.58 19.3546 61.6705 19.6645 61.6891C19.9745 61.7077 20.2845 61.6539 20.57 61.5319L27.1858 58.7051Z" fill="black" />
            <defs>
                <linearGradient id="paint0_linear_312_1042" x1="44.784" y1="18.8535" x2="36.784" y2="32.7099" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4D4D4D" />
                    <stop offset="1" />
                </linearGradient>
                <linearGradient id="paint1_linear_312_1042" x1="52.7846" y1="5" x2="20.7846" y2="60.4256" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4D4D4D" />
                    <stop offset="1" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const Dark=()=>{
    return(
    <svg width="70" height="72" viewBox="0 0 70 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            animate={{translateY:[0,5,0]}}
            transition={{duration:3,repeat:Infinity}}
             d="M36.7845 32.7099C39.6528 34.3659 43.7707 32.6096 45.9807 28.7817C48.1907 24.9539 47.6528 20.5095 44.7845 18.8535C41.9163 17.1975 37.7984 18.9539 35.5884 22.7817C33.3784 26.6096 33.9163 31.0539 36.7845 32.7099Z" fill="url(#paint0_linear_13_7064)" />
        <motion.path
            animate={{translateY:[0,5,0],translateX:[0,2,2.1,-2,-2.1,0]}}
            transition={{duration:3,repeat:Infinity}}
            d="M48.8582 43.4248C54.9587 31.2984 56.5189 22.4119 56.3405 16.249C56.2318 12.6852 55.5434 10.0615 54.8453 8.28671C54.5752 7.58934 54.2495 6.91478 53.8715 6.26951C53.762 6.08266 53.6456 5.89993 53.5226 5.72171C53.3378 5.42562 53.0847 5.17814 52.7846 5C52.4583 4.81764 52.0909 4.72156 51.7172 4.72088C51.5 4.71093 51.2826 4.70864 51.0653 4.71401C50.3106 4.7311 49.5583 4.80637 48.8152 4.93916C46.9175 5.26611 44.2855 6.03284 41.1373 7.7578C35.7047 10.7273 28.8084 16.4961 21.4799 27.6133L12.6422 30.9447L12.6183 30.954C10.5028 31.7803 8.73155 33.3021 7.596 35.269L1 46.6936C0.790119 47.0571 0.699936 47.4775 0.742229 47.8951C0.784522 48.3127 0.957147 48.7065 1.23565 49.0205C1.51415 49.3346 1.88441 49.5531 2.29398 49.645C2.70355 49.737 3.13167 49.6977 3.51769 49.5328L10.4148 46.5867C11.4338 46.1496 12.6697 46.041 14.1598 46.1161C15.1171 46.17 15.9779 46.279 16.8869 46.3927L17.7408 46.4977C19.3096 49.3804 21.8401 51.7974 24.7846 53.4974C27.7291 55.1974 31.0876 56.1804 34.3684 56.0977C34.5405 56.3357 34.7137 56.5557 34.8814 56.7773C35.4393 57.515 35.9641 58.206 36.4894 59.0081C37.2995 60.261 37.8234 61.3856 37.9544 62.4867L38.8515 69.9328C38.9017 70.3496 39.0818 70.74 39.3662 71.0487C39.6506 71.3574 40.025 71.5688 40.4362 71.653C40.8474 71.7371 41.2747 71.6898 41.6576 71.5176C42.0404 71.3454 42.3593 71.0571 42.5692 70.6936L49.1652 59.269C50.3008 57.3021 50.7331 55.0073 50.3909 52.7621L48.8582 43.4248ZM45.751 49.1826L45.641 49.3731C43.909 52.373 41.4872 54.2957 38.7629 55.2863C39.1407 55.8 39.5145 56.3206 39.8372 56.8256C40.7942 58.288 41.6885 60.0191 41.9277 62.0047L42.1051 63.4974L45.7011 57.269C46.3806 56.0923 46.6405 54.7197 46.4384 53.376L45.751 49.1826ZM16.2463 42.2863C15.742 39.4317 16.1962 36.373 17.9282 33.3731L18.0362 33.186L14.0649 34.6806C12.7988 35.1779 11.7393 36.0905 11.0601 37.269L7.4641 43.4974L8.84352 42.9082C10.6828 42.1226 12.631 42.028 14.376 42.1256C14.9728 42.1561 15.6125 42.216 16.2463 42.2863ZM50.6698 8.73498C50.808 8.99955 50.9668 9.34061 51.1267 9.75163C51.6585 11.1025 52.2507 13.2688 52.3425 16.3657C52.5154 22.5623 50.7029 32.6056 42.1769 47.3731C40.4609 50.3453 37.9213 51.7519 35.1243 52.0446C32.4677 52.326 29.4901 51.5953 26.7846 50.0333C24.0791 48.4713 21.9576 46.258 20.873 43.8166C19.7264 41.2425 19.6763 38.3453 21.3923 35.3731C29.7563 20.8862 37.5434 14.2785 43.0576 11.2637C45.8144 9.76073 48.0275 9.13551 49.4943 8.88306C49.958 8.79979 50.3512 8.75887 50.6698 8.73498Z" fill="url(#paint1_linear_13_7064)" />
        <motion.path
            animate={{translateY:[0,3,0]}}
            transition={{duration:3,repeat:Infinity}}
            d="M27.1859 58.7051C25.3371 58.0672 23.5131 57.2266 21.7845 56.2286C20.0524 55.2286 18.4159 54.0712 16.9391 52.7891L17.7989 59.9319C17.836 60.2402 17.9444 60.5355 18.1155 60.7947C18.2865 61.0538 18.5156 61.2695 18.7845 61.4247C19.0534 61.58 19.3547 61.6705 19.6647 61.6891C19.9746 61.7077 20.2846 61.6539 20.5701 61.5319L27.1859 58.7051Z" fill="#FF00B8" />
        <defs>
            <linearGradient id="paint0_linear_13_7064" x1="44.7845" y1="18.8535" x2="36.7845" y2="32.7099" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#FF00B8" />
            </linearGradient>
            <linearGradient id="paint1_linear_13_7064" x1="52.7846" y1="5" x2="20.7846" y2="60.4256" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#FF00B8" />
            </linearGradient>
        </defs>
    </svg>
    )
}