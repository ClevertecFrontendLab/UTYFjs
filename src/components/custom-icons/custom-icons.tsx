import Icon, { HomeOutlined } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { Space } from 'antd';
import React from 'react';


const ExitSvg = () => (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='16' height='16' fill='white' />
        <path
            d='M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z'
            fill='black'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z'
            fill='black'
        />
    </svg>
);

const CleverFitSvg = () => (
    <svg
        width='133'
        height='33'
        viewBox='0 0 426 107'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M276.301 51.8624H291.229V61.6684H291.45C292.114 60.1363 293.109 58.6041 294.436 57.174C295.652 55.744 297.09 54.6204 298.748 53.5989C300.296 52.5774 302.066 51.8624 303.946 51.2495C305.715 50.7388 307.705 50.5345 309.696 50.4324C310.691 50.4324 311.797 50.6367 313.124 50.9431V64.4264C312.35 64.3243 311.465 64.2221 310.47 64.12C309.364 64.0178 308.369 63.9157 307.484 63.9157C304.609 63.9157 302.176 64.4264 300.186 65.2436C298.195 66.1629 296.537 67.3886 295.32 68.9208C294.104 70.453 293.219 72.1895 292.777 74.2324C292.224 76.2754 292.003 78.5226 292.003 80.8719V104.91H276.301V51.8624Z'
            fill='#10239E'
        />
        <path
            d='M255.155 72.5981C254.381 68.9208 253.054 66.1629 251.174 64.2221C249.295 62.3835 246.42 61.4642 242.66 61.362C240.116 61.362 238.015 61.7706 236.357 62.5878C234.698 63.4049 233.371 64.3243 232.376 65.4479C231.381 66.6736 230.717 67.8994 230.275 69.1251C229.833 70.453 229.611 71.5766 229.611 72.5981H255.155ZM229.611 81.7913C229.833 86.49 231.049 89.9629 233.482 92.0059C235.804 94.1509 239.232 95.1724 243.655 95.1724C246.751 95.1724 249.516 94.4574 251.838 93.0273C254.049 91.5973 255.487 89.9629 256.04 88.3286H269.862C267.651 94.6617 264.223 99.2582 259.689 101.914C255.045 104.672 249.516 106 243.102 106C238.568 106 234.477 105.387 230.938 104.059C227.289 102.731 224.193 100.79 221.76 98.3389C219.217 95.8874 217.227 93.0273 215.9 89.5544C214.573 86.1835 213.909 82.4041 213.909 78.3183C213.909 74.4367 214.573 70.7595 216.01 67.2865C217.337 63.9157 219.328 60.9534 221.981 58.5019C224.525 56.0504 227.621 54.0075 231.16 52.5774C234.698 51.1474 238.679 50.4324 243.102 50.4324C247.968 50.4324 252.17 51.3517 255.819 53.0882C259.357 54.8247 262.343 57.174 264.665 60.0341C266.987 62.9964 268.646 66.3672 269.752 70.0444C270.747 73.8238 271.079 77.7054 270.858 81.7913H229.611Z'
            fill='#10239E'
        />
        <path
            d='M194.62 104.91H177.149L157.677 51.8625H174.153L186.206 87.9202H186.427L198.481 51.8625H214.072L194.62 104.91Z'
            fill='#10239E'
        />
        <path
            d='M141.95 72.5981C141.176 68.9208 139.849 66.1629 137.969 64.2221C136.089 62.3835 133.214 61.4642 129.455 61.362C126.911 61.362 124.81 61.7706 123.152 62.5878C121.493 63.4049 120.166 64.3243 119.171 65.4479C118.176 66.6736 117.512 67.8994 117.07 69.1251C116.628 70.453 116.406 71.5766 116.406 72.5981H141.95ZM116.406 81.7913C116.628 86.49 117.844 89.9629 120.277 92.0059C122.599 94.1509 126.027 95.1724 130.45 95.1724C133.546 95.1724 136.311 94.4574 138.633 93.0273C140.844 91.5973 142.282 89.9629 142.835 88.3286H156.657C154.446 94.6617 151.018 99.2582 146.484 101.914C141.84 104.672 136.311 106 129.897 106C125.363 106 121.272 105.387 117.733 104.059C114.084 102.731 110.988 100.79 108.555 98.3389C106.012 95.8874 104.021 93.0273 102.695 89.5544C101.368 86.1835 100.704 82.4041 100.704 78.3183C100.704 74.4367 101.368 70.7595 102.805 67.2865C104.132 63.9157 106.122 60.9534 108.776 58.5019C111.32 56.0504 114.416 54.0075 117.954 52.5774C121.493 51.1474 125.474 50.4324 129.897 50.4324C134.763 50.4324 138.965 51.3517 142.614 53.0882C146.152 54.8247 149.138 57.174 151.46 60.0341C153.782 62.9964 155.441 66.3672 156.547 70.0444C157.542 73.8238 157.874 77.7054 157.652 81.7913H116.406Z'
            fill='#10239E'
        />
        <path d='M79.6172 29.3223H95.0983V104.91H79.6172V29.3223Z' fill='#10239E' />
        <path
            d='M56.2042 55.3278C55.8717 53.5064 55.2065 51.8874 54.2088 50.3696C53.1003 48.8517 51.8808 47.5363 50.3288 46.322C48.7769 45.2089 47.0031 44.2982 45.0077 43.6911C43.0123 43.084 41.0169 42.7804 38.9106 42.6792C34.9198 42.6792 31.5941 43.3875 28.9335 44.8042C26.1621 46.2208 23.945 48.0422 22.2822 50.3696C20.5084 52.6969 19.289 55.3278 18.513 58.2623C17.737 61.298 17.4045 64.3336 17.4045 67.4705C17.4045 70.5062 17.737 73.5418 18.513 76.3751C19.289 79.2084 20.5084 81.8393 22.2822 84.0655C23.945 86.3928 26.1621 88.2142 28.9335 89.6309C31.5941 91.0475 34.9198 91.6547 38.9106 91.6547C44.2317 91.6547 48.3334 90.238 51.3266 87.2024C54.3197 84.2679 56.2042 80.3215 56.8694 75.4644H73.7196C73.2761 80.0179 72.0567 84.0655 70.283 87.7083C68.3984 91.3511 65.9596 94.488 62.9665 97.0177C59.8625 99.6486 56.3151 101.571 52.3243 102.887C48.2226 104.303 43.7883 104.91 38.9106 104.91C32.8135 104.91 27.3815 104 22.5039 102.077C17.6262 100.155 13.6353 97.5236 10.3097 94.0832C6.98396 90.744 4.43426 86.7976 2.66056 82.2441C0.886852 77.6906 0 72.7323 0 67.4705C0 62.1075 0.886852 57.1492 2.66056 52.4945C4.43426 47.8398 6.98396 43.7923 10.3097 40.3519C13.6353 37.0126 17.6262 34.2805 22.5039 32.2567C27.3815 30.3342 32.8135 29.4235 38.9106 29.3223C43.234 29.3223 47.3357 29.9294 51.2157 31.0425C55.0957 32.2567 58.5322 33.8758 61.6362 36.1019C64.7402 38.3281 67.2899 40.959 69.2853 44.197C71.2807 47.4351 72.5001 51.1791 73.0544 55.3278H56.2042Z'
            fill='#10239E'
        />
        <path
            d='M409.192 36.1508H422.781V50.8038H409.192V78.8037C409.192 88.3334 409.781 88.3051 410.961 89.4215C412.14 90.5379 414.5 91.0962 418.038 91.0962C419.218 91.2357 420.25 91.0962 421.429 90.9566C422.461 90.9566 423.887 90.1661 424.624 89.4215V104.772C422.781 105.56 420.692 106.447 418.628 106.447C416.416 106.587 414.352 106.587 412.288 106.587C412.15 106.587 409.815 106.587 408.832 106.447C406.438 106.107 402.877 104.842 400.666 103.586C399.437 102.888 396.242 99.7485 395.874 98.3529C394.768 96.6085 394.153 93.1895 394.153 89.5611V50.8038H381.13V36.1508H394.153V11.729H409.192V36.1508Z'
            fill='#10239E'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M316.257 50.8039H326.578V104.912H343.091V50.8039H355.328L355.328 36.1508H343.091L343.091 34.8948C343.091 31.9642 343.681 29.1812 344.86 27.9252C346.04 26.6692 348.104 25.9715 351.053 25.9715C353.707 25.9715 356.213 26.111 358.719 26.3901V11.729L353.117 11.729L347.588 11.729C340.584 11.729 335.055 15.1096 331.738 18.3578C327.462 22.5444 326.578 27.359 326.578 33.6388L326.578 36.1508H316.257L316.257 50.8039ZM376.707 57.0837H360.636V104.912H376.707V57.0837Z'
            fill='#10239E'
        />
        <path
            d='M376.707 43.617C376.707 47.868 373.217 51.3141 368.966 51.3141C364.715 51.3141 361.226 47.868 361.226 43.617C361.226 39.366 364.715 35.9199 368.966 35.9199C373.217 35.9199 376.707 39.366 376.707 43.617Z'
            fill='#40A9FF'
        />
    </svg>
);

const FitSvg = () =>
  (<svg width='28' height='26' viewBox='0 0 110 105' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
          d='M93.403 35.4686H106.744V49.8451H93.403V77.3167C93.403 86.6666 93.9819 86.6388 95.1398 87.7342C96.2977 88.8295 98.6135 89.3772 102.087 89.3772C103.245 89.5141 104.258 89.3772 105.416 89.2403C106.429 89.2403 107.829 88.4647 108.553 87.7342V102.795C106.744 103.568 104.692 104.438 102.666 104.438C100.495 104.575 98.4688 104.575 96.4424 104.575C96.3068 104.575 94.0151 104.575 93.0502 104.438C90.6997 104.105 87.2042 102.864 85.0331 101.632C83.827 100.947 80.691 97.8663 80.3292 96.4971C79.2436 94.7856 78.6398 91.431 78.6398 87.8711V49.8451H65.8555V35.4686H78.6398V11.5076H93.403V35.4686Z'
          fill='#10239E'
      />
      <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M2.1709 49.8452H12.3025V102.932H28.5131V49.8452H40.5263L40.5262 35.4686H28.5131L28.5131 34.2363C28.5131 31.361 29.0921 28.6305 30.25 27.3982C31.4079 26.1659 33.4342 25.4813 36.3289 25.4813C38.9342 25.4813 41.3947 25.6182 43.8553 25.8921V11.5076L38.3553 11.5076L32.9276 11.5076C26.0525 11.5076 20.6248 14.8244 17.3683 18.0113C13.1709 22.1189 12.3025 26.8426 12.3025 33.004L12.3024 35.4686H2.17083L2.1709 49.8452ZM61.5131 56.0065H45.7368V102.932H61.5131V56.0065Z'
          fill='#10239E'
      />
      <path
          d='M61.5131 42.7939C61.5131 46.9647 58.0852 50.3457 53.9144 50.3457C49.7436 50.3457 46.3157 46.9646 46.3157 42.7939C46.3157 38.6231 49.7436 35.242 53.9144 35.242C58.0852 35.242 61.5131 38.6231 61.5131 42.7939Z'
          fill='#40A9FF'
      />
  </svg>);


 const ExitIcon = (props: Partial<CustomIconComponentProps>) => (<Icon component={ExitSvg} {...props}/>)
 const CleverFitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CleverFitSvg} {...props} />
);
 const FitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={FitSvg} {...props} />
);

export { ExitIcon, CleverFitIcon, FitIcon };