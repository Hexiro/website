import { motion } from "framer-motion";
import styled from "styled-components";

const Svg = styled(motion.svg)`
    height: 48px;
    min-width: 71px;
    margin: 16px 20px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
`;

const onTap = () => {
    window.scrollTo(0, 0);
};

export default function Hex(): JSX.Element {
    return (
        <Svg
            width="1em"
            height="1em"
            viewBox="0 0 71 48"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onTap={onTap}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.921286 45.8203C1.31247 46.806 4.00538 53.2317 6.66637 31.0221C8.43218 32.1163 11.4658 32.3691 17.5597 32.1911C17.1783 34.9102 17.286 41.3086 20.8674 43.159C22.3845 43.9428 23.1057 35.9714 23.3545 31.7931L27.6819 30.1268C31.0643 41.4678 45.6136 38.16 47.7525 23.6107C48.3079 24.4563 49.6028 26.3266 50.339 27.0429C49.6758 28.4937 48.5234 31.658 48.5234 33.1859C48.5234 33.8823 51.1348 31.0968 52.5276 29.2315C61.4312 37.0408 69.7877 28.2118 70.2105 25.9983C67.7732 27.8885 57.5464 29.3359 54.4426 26.3714C55.4623 24.3237 57.2032 20.1977 57.2032 18.4377C57.2032 16.075 53.5473 21.2232 51.8561 24.0584C50.0239 21.9693 46.8074 17.6667 46.2851 13.8118C46.1908 13.1154 44.784 11.3065 45.2903 19.4076C46.0115 30.9475 32.7804 38.3838 30.7161 28.4108C33.1037 26.7444 37.7296 23.367 38.1275 17.3185C38.211 16.0501 30.0446 14.5828 27.8063 25.0781C27.8063 25.0781 23.7773 27.2916 23.7773 26.5703C23.7773 25.8491 24.6734 16.9118 25.5272 11.7974C26.272 7.70907 27.5629 4.75903 27.5629 4.75903C28.4529 2.66991 29.9684 3.83867 30.2171 5.50499C30.2279 5.57699 30.2394 5.65576 30.2517 5.73977L30.2519 5.74104C30.3883 6.67438 30.6191 8.25314 30.9384 8.38998C31.3363 7.17132 31.1125 3.31639 29.5456 1.94851C27.2572 -0.0493391 24.0393 -0.637888 20.9603 11.0761C19.9881 15.4783 18.9432 20.3302 17.9327 27.59C14.426 28.4108 7.42822 27.5154 7.56171 26.4959C8.35923 20.4049 9.37593 9.407 9.00434 7.12173C8.50693 4.06266 5.87909 2.96006 5.09967 3.46576C3.24943 11.6034 2.01072 21.3118 1.44855 25.099C-0.520031 39.4688 0.299521 44.2534 0.921286 45.8203ZM34.4716 19.7309C34.2478 19.6397 33.0241 19.9995 32.2083 21.7703C31.3926 23.5411 33.568 21.1154 34.4716 19.7309Z"
            />
        </Svg>
    );
}