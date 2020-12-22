/* eslint-disable max-len */
import React from 'react';
import styles from './styles.module.scss';

export const EmailIcon = ({ className }) => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0)">
        <path d="M108.757 15H11.2437C5.0305 15 -0.00634766 20.0366 -0.00634766 26.25V93.75C-0.00634766 99.9632 5.0305 105 11.2437 105H108.757C114.97 105 120.007 99.9632 120.007 93.75V26.25C120.007 20.0366 114.97 15 108.757 15ZM116.257 92.0828L80.7836 56.61L116.257 34.0058V92.0828ZM11.2437 18.75H108.757C112.892 18.75 116.257 22.1143 116.257 26.25V29.562L64.6272 62.4626C61.833 64.2426 58.2643 64.1876 55.5341 62.3308L3.74365 27.1303V26.25C3.74365 22.1143 7.10834 18.75 11.2437 18.75ZM3.74365 31.6598L39.7168 56.1096L3.74365 92.0828V31.6598ZM108.757 101.25H11.2437C8.15478 101.25 5.49884 99.3711 4.35096 96.6977L42.8258 58.2227L53.4285 65.4291C55.4646 66.8134 57.8194 67.5073 60.1778 67.5073C62.419 67.5073 64.6637 66.8811 66.6396 65.6231L77.5941 58.6425L115.649 96.6977C114.501 99.3711 111.846 101.25 108.757 101.25Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="120" height="120" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PhoneIcon = ({ className }) => {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} ${styles.phone}`}>
      <path d="M76.0073 110C75.2124 110 74.4116 109.924 73.614 109.768C73.5921 109.764 73.5703 109.761 73.5485 109.757C72.3941 109.559 45.035 104.661 24.4642 84.0904C7.8815 67.5082 2.28791 46.2228 0.638144 37.7105C0.33045 36.6979 0.153689 35.6423 0.113318 34.5697C0.10077 34.4503 0.0974971 34.3308 0.103498 34.2118C0.0740382 30.8681 1.35173 27.7361 3.71235 25.3755L10.7053 18.3825C11.1145 17.9734 11.6698 17.7431 12.2481 17.7431C12.8264 17.7431 13.3818 17.9734 13.791 18.3825L36.4201 41.0122C37.2728 41.8644 37.2728 43.2463 36.4201 44.0979L29.4283 51.0908C29.2499 51.2692 29.0704 51.4383 28.8871 51.6009C25.6208 54.5011 24.9874 59.5802 27.4173 63.4122C29.7518 67.0931 32.3928 70.4161 35.2663 73.2895C38.67 76.6927 42.7087 79.7762 47.269 82.4521C50.999 84.6409 55.7945 83.9393 58.9325 80.7462L59.0083 80.6698L66.0013 73.6774C66.854 72.8247 68.2348 72.8247 69.0869 73.6774L91.7161 96.3065C92.5688 97.1587 92.5688 98.5406 91.7161 99.3922L84.7237 106.385C82.3821 108.727 79.2485 110 76.0073 110ZM74.1824 105.437C74.2424 105.445 74.3025 105.454 74.3619 105.466C77.0117 106.016 79.7318 105.206 81.638 103.3L87.087 97.8504L67.5441 78.3075L62.0318 83.8198C57.5026 88.4287 50.5178 89.42 45.0606 86.2181C40.1801 83.3539 35.8467 80.0429 32.1811 76.3768C29.0813 73.277 26.2384 69.7025 23.7326 65.7505C20.1696 60.1307 21.1412 52.644 25.994 48.3347C26.1173 48.2266 26.2329 48.1164 26.3464 48.003L31.7932 42.5561L12.2487 23.0116L6.79857 28.4611C5.25355 30.0067 4.42649 32.0667 4.46904 34.2642C4.47068 34.2882 4.47177 34.3117 4.47231 34.3357C4.49414 35.0864 4.61743 35.8223 4.83893 36.5223C4.86402 36.6025 4.88476 36.6848 4.90058 36.7678C6.44505 44.8033 11.744 65.1984 27.5504 81.0053C46.526 99.9809 72.3144 105.088 74.1824 105.437ZM107.717 60.5262C106.512 60.5262 105.534 59.5491 105.534 58.344C105.534 28.5801 81.3194 4.36445 51.5549 4.36445C50.3498 4.36445 49.3727 3.38736 49.3727 2.18223C49.3727 0.977091 50.3498 0 51.5549 0C83.7264 0 109.899 26.1731 109.899 58.344C109.899 59.5491 108.922 60.5262 107.717 60.5262ZM94.176 60.5262C92.9708 60.5262 91.9938 59.5491 91.9938 58.344C91.9938 35.8529 73.6963 17.5555 51.2058 17.5555C50.0006 17.5555 49.0235 16.5784 49.0235 15.3732C49.0235 14.1681 50.0006 13.191 51.2058 13.191C76.1028 13.191 96.3582 33.4464 96.3582 58.344C96.3582 59.5491 95.3811 60.5262 94.176 60.5262ZM80.6691 60.5262C79.464 60.5262 78.4869 59.5491 78.4869 58.344C78.4869 43.3014 66.2484 31.0629 51.2058 31.0629C50.0006 31.0629 49.0235 30.0858 49.0235 28.8807C49.0235 27.6755 50.0006 26.6984 51.2058 26.6984C68.6549 26.6984 82.8513 40.8944 82.8513 58.344C82.8513 59.5491 81.8742 60.5262 80.6691 60.5262Z" fill="currentColor" />
    </svg>
  );
};

export const AddressIcon = ({ className }) => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M46.6454 10.1803H31.7937C30.4735 10.1803 29.4033 11.2505 29.4033 12.5707V27.4223C29.4033 28.7426 30.4735 29.8127 31.7937 29.8127H46.6454C47.9656 29.8127 49.0357 28.7426 49.0357 27.4223V12.5709C49.0357 11.2507 47.9656 10.1803 46.6454 10.1803ZM44.255 25.0319H34.1843V14.9613H44.255V25.0319Z" fill="currentColor" />
      <path d="M73.2347 10.1803H58.3831C57.0628 10.1803 55.9927 11.2505 55.9927 12.5707V27.4223C55.9927 28.7426 57.0628 29.8127 58.3831 29.8127H73.2347C74.5549 29.8127 75.6251 28.7426 75.6251 27.4223V12.5709C75.6251 11.2507 74.5549 10.1803 73.2347 10.1803ZM70.8443 25.0319H60.7735V14.9613H70.8441V25.0319H70.8443Z" fill="currentColor" />
      <path d="M46.6454 36.5299H31.7937C30.4735 36.5299 29.4033 37.6001 29.4033 38.9203V53.7719C29.4033 55.0922 30.4735 56.1623 31.7937 56.1623H46.6454C47.9656 56.1623 49.0357 55.0922 49.0357 53.7719V38.9203C49.0357 37.6001 47.9656 36.5299 46.6454 36.5299ZM44.255 51.3816H34.1843V41.3109H44.255V51.3816Z" fill="currentColor" />
      <path d="M73.2347 36.5299H58.3831C57.0628 36.5299 55.9927 37.6001 55.9927 38.9203V53.7719C55.9927 55.0922 57.0628 56.1623 58.3831 56.1623H73.2347C74.5549 56.1623 75.6251 55.0922 75.6251 53.7719V38.9203C75.6251 37.6001 74.5549 36.5299 73.2347 36.5299ZM70.8443 51.3816H60.7735V41.3109H70.8441V51.3816H70.8443Z" fill="currentColor" />
      <path d="M46.6454 62.8795H31.7937C30.4735 62.8795 29.4033 63.9497 29.4033 65.2699V80.1215C29.4033 81.4418 30.4735 82.5119 31.7937 82.5119H46.6454C47.9656 82.5119 49.0357 81.4418 49.0357 80.1215V65.2699C49.0357 63.9497 47.9656 62.8795 46.6454 62.8795ZM44.255 77.7312H34.1843V67.6605H44.255V77.7312Z" fill="currentColor" />
      <path d="M86.165 73.9094V2.39039C86.165 1.07016 85.0949 0 83.7747 0H21.2546C19.9344 0 18.8643 1.07016 18.8643 2.39039V117.61C18.8643 118.93 19.9344 120 21.2546 120H83.7749C83.8677 120 83.968 119.99 84.0718 119.974C84.8851 119.842 85.6136 119.384 86.125 118.738C86.1294 118.732 86.1339 118.727 86.1381 118.721C87.6732 116.755 101.136 99.2599 101.136 90.6811C101.136 82.0184 94.5772 74.8624 86.165 73.9094ZM62.3408 115.219H54.905V107.908C54.905 106.588 53.8349 105.518 52.5147 105.518C51.1944 105.518 50.1243 106.588 50.1243 107.908V115.219H42.6885V95.2076H62.3408V115.219ZM67.1216 115.219V92.8172C67.1216 91.4969 66.0514 90.4268 64.7312 90.4268H40.2981C38.9779 90.4268 37.9077 91.4969 37.9077 92.8172V115.219H23.645V4.78078H81.3845V74.0473C79.3122 74.4037 77.3678 75.1369 75.6254 76.1775V65.2699C75.6254 63.9497 74.5553 62.8795 73.235 62.8795H58.3834C57.0632 62.8795 55.993 63.9497 55.993 65.2699V80.1216C55.993 81.4418 57.0632 82.512 58.3834 82.512H69.4857C68.1404 84.9344 67.3712 87.7193 67.3712 90.6813C67.3712 97.2954 75.3732 109.208 79.7422 115.219H67.1216ZM70.8447 67.6603V77.7309H60.7738V67.6603H70.8447ZM84.2535 113.293C78.9468 106.098 72.1522 95.3374 72.1522 90.6813C72.1522 84.0084 77.5808 78.5794 84.2537 78.5794C90.9266 78.5794 96.3554 84.0082 96.3554 90.6813C96.3557 95.333 89.5604 106.096 84.2535 113.293Z" fill="currentColor" />
      <path d="M84.2535 82.9772C80.0054 82.9772 76.5493 86.433 76.5493 90.6813C76.5493 94.9294 80.0054 98.3855 84.2535 98.3855C88.5015 98.3855 91.9576 94.9294 91.9576 90.6813C91.9576 86.4333 88.5015 82.9772 84.2535 82.9772ZM84.2537 93.6044C82.6419 93.6044 81.3303 92.2931 81.3303 90.6811C81.3303 89.069 82.6417 87.7577 84.2537 87.7577C85.8655 87.7577 87.177 89.0688 87.177 90.6811C87.177 92.2931 85.8655 93.6044 84.2537 93.6044Z" fill="currentColor" />
      <path d="M52.5144 98.092C51.1942 98.092 50.124 99.1622 50.124 100.482V100.722C50.124 102.042 51.1942 103.112 52.5144 103.112C53.8347 103.112 54.9048 102.042 54.9048 100.722V100.482C54.9048 99.1624 53.8347 98.092 52.5144 98.092Z" fill="currentColor" />
    </svg>
  );
};
