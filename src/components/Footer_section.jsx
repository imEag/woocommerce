import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: ${props => props.theme.color.purple};
    font-size: ${props => props.theme.font_size.medium};
    font-family: ${props => props.theme.font.primary};
    color:  white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    & div#upperContainer {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 14rem;
        border-bottom: 0.1rem solid ${props => props.theme.color.gray};
        
        @media (max-width: 1200px) {
            flex-direction: column;
            gap: 4rem;
            width: 80%;
            text-align: center;
        }

        
        & div#caracteristics {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 120rem;
            
            @media (max-width: 1200px) {
                flex-direction: column;
                gap: 4rem;
                width: 80%;
            }
    
            & div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1.5rem;

            }
        }
    }

    & div#bottomContainer {
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100rem;
        padding: 5rem 0;

        @media (max-width: 1200px) {
            width: auto;
            gap: 4rem;
            padding: 5rem;
            flex-wrap: wrap;
            justify-content: center;
        }


        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap:2rem
             
        }

        @media (max-width: 1200px) {
            & > div {
                align-items: center;
            }

        }

        & > div p {
            font-size: ${props => props.theme.font_size.small};
            font-family: ${props => props.theme.font.primary};
            font-weight: 700;
            text-transform: uppercase;
        }
        
        & div#more {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;

        @media (max-width: 1200px) {
            align-items: center;
        }

            & a {
                font-size: ${props => props.theme.font_size.tiny};
                color: white;
            }
        }
    }



`;

export const Footer = () => {
    return (
        <StyledFooter>
            <div id="upperContainer">
                <div id="caracteristics" >
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 0C9.17819 0 0 9.17819 0 20.5C0 31.8218 9.17819 41 20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17819 31.8218 0 20.5 0ZM20.5 4.45434C29.3618 4.45434 36.5432 11.6404 36.5432 20.5C36.5432 29.3596 29.3618 36.5432 20.5 36.5432C11.6382 36.5432 4.45684 29.3596 4.45684 20.5C4.45687 11.6404 11.6382 4.45434 20.5 4.45434ZM28.3552 10.7655L16.4736 22.6496L12.6198 18.7958L8.83861 22.5745L12.6924 26.4283L16.4986 30.2345L20.2773 26.4533L32.1614 14.5717L28.3552 10.7655V10.7655Z" fill="white" />
                        </svg>
                        <p>30 day money back guarantee</p>
                    </div>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 20.5C0 9.17819 9.17819 0 20.5 0C31.8218 0 41 9.17819 41 20.5C41 31.8218 31.8218 41 20.5 41C9.17819 41 0 31.8218 0 20.5ZM5.51913 14.7467C7.14548 10.5137 10.5139 7.14391 14.7469 5.51693L17.015 10.906C15.6155 11.416 14.344 12.2249 13.2889 13.2764C12.2339 14.3279 11.4207 15.5967 10.906 16.9945L5.51913 14.7467ZM14.7301 35.4744C10.5054 33.8456 7.14397 30.4806 5.51959 26.2542L10.906 24.026C11.4171 25.4201 12.2269 26.6856 13.2787 27.7338C14.3304 28.782 15.5986 29.5876 16.9945 30.094L14.7301 35.4744ZM35.4744 26.2699C33.8479 30.4883 30.4904 33.8466 26.2719 35.4737L24.0465 30.094C25.4361 29.5791 26.697 28.7678 27.7413 27.7163C28.7857 26.6649 29.5885 25.3986 30.094 24.0055L35.4744 26.2699ZM26.28 5.5273C30.4941 7.15581 33.8481 10.5127 35.4737 14.7281L30.094 16.9535C29.5805 15.572 28.7742 14.3181 27.7303 13.2777C26.6864 12.2374 25.4297 11.4353 24.0465 10.9265L26.28 5.5273ZM14.35 20.5C14.35 23.903 17.097 26.65 20.5 26.65C23.903 26.65 26.65 23.903 26.65 20.5C26.65 17.097 23.903 14.35 20.5 14.35C17.097 14.35 14.35 17.097 14.35 20.5Z" fill="white" />
                        </svg>
                        <p>Support teams across the world</p>
                    </div>
                    <div>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 20.5C0 9.17819 9.17819 0 20.5 0C31.8218 0 41 9.17819 41 20.5C41 31.8218 31.8218 41 20.5 41C9.17819 41 0 31.8218 0 20.5ZM36.5432 20.5C36.5432 11.6404 29.3618 4.45434 20.5 4.45434C11.6382 4.45434 4.45687 11.6404 4.45684 20.5C4.45684 29.3596 11.6382 36.5432 20.5 36.5432C29.3618 36.5432 36.5432 29.3596 36.5432 20.5ZM26.4314 14.6234V17.8214C27.7024 17.8214 28.9734 19.1006 28.9734 20.593V28.055C28.9734 29.3342 27.7024 30.6134 26.2196 30.6134H14.5687C13.2977 30.6134 12.0267 29.3342 12.0267 27.8418V20.3798C12.0267 19.1006 13.2977 17.8214 14.5687 17.8214V14.6234C14.5687 11.6386 17.5344 9.29335 20.5001 9.29335C23.4657 9.29335 26.4314 11.6386 26.4314 14.6234ZM17.3226 17.8214H23.6776V14.6234C23.6776 12.9178 22.1947 11.8518 20.5001 11.8518C18.8054 11.8518 17.3226 12.9178 17.3226 14.6234V17.8214Z" fill="white" />
                        </svg>
                        <p>Safe & Secure online payment</p>
                    </div>
                </div>
                <svg id="logo" width="184" height="37" viewBox="0 0 184 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M56.3642 0H5.76873C2.56681 0 -0.0252268 2.61744 0.00018527 5.79395V25.1071C0.00018527 28.3091 2.59222 30.9011 5.79414 30.9011H29.7577L40.7104 37L38.22 30.9011H56.3642C59.5661 30.9011 62.1582 28.3091 62.1582 25.1071V5.79395C62.1582 2.59203 59.5661 0 56.3642 0ZM4.70146 4.47239C3.98992 4.52322 3.45626 4.77734 3.10049 5.26017C2.74473 5.71759 2.61767 6.30207 2.6939 6.96278C4.19322 16.4923 5.59088 22.9216 6.8869 26.2506C7.39514 27.4703 7.97962 28.0548 8.66574 28.004C9.73305 27.9278 11.0037 26.4539 12.503 23.5823C13.2907 21.9559 14.5105 19.5164 16.1623 16.2636C17.5346 21.0665 19.4151 24.675 21.7784 27.0892C22.4391 27.7753 23.1252 28.0802 23.7859 28.0294C24.3704 27.9786 24.8278 27.6736 25.1328 27.1146C25.3869 26.6317 25.4885 26.0727 25.4377 25.4374C25.2853 23.1249 25.514 19.8975 26.1493 15.7554C26.81 11.4861 27.6232 8.41127 28.6142 6.5816C28.8175 6.20042 28.8938 5.81923 28.8684 5.36182C28.8175 4.77734 28.5634 4.29451 28.0806 3.91333C27.5978 3.53215 27.0641 3.35427 26.4796 3.40509C25.7427 3.45591 25.1836 3.81168 24.8024 4.52322C23.2269 7.39479 22.1087 12.0452 21.448 18.4999C20.4824 16.0603 19.6692 13.1887 19.0339 9.80893C18.7543 8.30962 18.0682 7.59808 16.9501 7.67432C16.1877 7.72514 15.5524 8.23338 15.0442 9.19904L9.47893 19.7959C8.5641 16.1111 7.70008 11.6132 6.91231 6.30207C6.73442 4.98064 5.99747 4.37074 4.70146 4.47239ZM53.6701 6.30211C55.4743 6.68329 56.8212 7.64895 57.736 9.24991C58.5492 10.6222 58.9558 12.2739 58.9558 14.2561C58.9558 16.8735 58.2951 19.2623 56.9737 21.4477C55.4489 23.9889 53.4668 25.2595 51.0018 25.2595C50.5698 25.2595 50.1124 25.2087 49.6296 25.1071C47.8253 24.7259 46.4785 23.7602 45.5636 22.1593C44.7504 20.7616 44.3438 19.0844 44.3438 17.1277C44.3438 14.5102 45.0046 12.1215 46.326 9.96145C47.8761 7.42024 49.8583 6.14963 52.2978 6.14963C52.7298 6.14963 53.1873 6.20046 53.6701 6.30211ZM52.6028 20.0501C53.543 19.2115 54.1783 17.9663 54.5341 16.2891C54.6357 15.7046 54.712 15.0693 54.712 14.4086C54.712 13.6716 54.5595 12.8838 54.2546 12.0961C53.8734 11.105 53.3651 10.5713 52.7553 10.4443C51.8404 10.2664 50.951 10.7746 50.1124 12.0198C49.4263 12.9855 48.9943 14.002 48.7656 15.0439C48.6385 15.6283 48.5877 16.2637 48.5877 16.899C48.5877 17.6359 48.7401 18.4237 49.0451 19.2114C49.4263 20.2025 49.9345 20.7362 50.5444 20.8632C51.1797 20.9903 51.8658 20.7108 52.6028 20.0501ZM41.8031 9.24991C40.8883 7.64895 39.516 6.68329 37.7372 6.30211C37.2544 6.20046 36.7969 6.14963 36.3649 6.14963C33.9254 6.14963 31.9432 7.42024 30.3931 9.96145C29.0717 12.1215 28.4109 14.5102 28.4109 17.1277C28.4109 19.0844 28.8175 20.7616 29.6307 22.1593C30.5456 23.7602 31.8924 24.7259 33.6967 25.1071C34.1795 25.2087 34.6369 25.2595 35.0689 25.2595C37.5339 25.2595 39.516 23.9889 41.0408 21.4477C42.3622 19.2623 43.0229 16.8735 43.0229 14.2561C43.0229 12.2739 42.6163 10.6222 41.8031 9.24991ZM38.6012 16.2891C38.2454 17.9663 37.6101 19.2115 36.6699 20.0501C35.9329 20.7108 35.2468 20.9903 34.6115 20.8632C34.0016 20.7362 33.4934 20.2025 33.1122 19.2114C32.8072 18.4237 32.6548 17.6359 32.6548 16.899C32.6548 16.2637 32.7056 15.6283 32.8326 15.0439C33.0614 14.002 33.4934 12.9855 34.1795 12.0198C35.0181 10.7746 35.9075 10.2664 36.8223 10.4443C37.4322 10.5713 37.9405 11.105 38.3217 12.0961C38.6266 12.8838 38.7791 13.6716 38.7791 14.4086C38.7791 15.0693 38.7283 15.7046 38.6012 16.2891Z" fill="white" />
                    <path d="M68.5876 9.02142C66.885 10.6986 66.0464 12.8332 66.0464 15.4253C66.0464 18.1952 66.885 20.4569 68.5622 22.1595C70.2394 23.8621 72.4248 24.7261 75.1439 24.7261C75.9317 24.7261 76.8211 24.599 77.7868 24.3195V20.2027C76.8974 20.4569 76.135 20.5839 75.4743 20.5839C74.1274 20.5839 73.0601 20.1265 72.2469 19.2371C71.4337 18.3222 71.0272 17.1025 71.0272 15.5523C71.0272 14.1038 71.4338 12.9095 72.2215 11.9946C73.0347 11.0544 74.0258 10.597 75.2456 10.597C76.0333 10.597 76.8719 10.724 77.7868 10.9781V6.86139C76.9482 6.63268 76.0079 6.53103 75.0169 6.53103C72.4248 6.50562 70.2902 7.34422 68.5876 9.02142ZM86.2236 6.50562C83.8857 6.50562 82.056 7.29339 80.7346 8.84353C79.4132 10.3937 78.7778 12.5791 78.7778 15.3744C78.7778 18.3985 79.4386 20.711 80.7346 22.3119C82.0306 23.9129 83.9365 24.7261 86.4269 24.7261C88.841 24.7261 90.6961 23.9129 91.9921 22.3119C93.2882 20.711 93.9489 18.4493 93.9489 15.5523C93.9489 12.6553 93.2881 10.4191 91.9667 8.84353C90.6199 7.29339 88.714 6.50562 86.2236 6.50562ZM88.2311 19.7199C87.7737 20.4314 87.0876 20.7872 86.2236 20.7872C85.4104 20.7872 84.8005 20.4314 84.3685 19.7199C83.9365 19.0084 83.7332 17.5853 83.7332 15.4253C83.7332 12.0963 84.5718 10.4445 86.2744 10.4445C88.0533 10.4445 88.9681 12.1217 88.9681 15.5015C88.9427 17.5853 88.6886 19.0084 88.2311 19.7199ZM106.502 6.98845L105.588 10.8765C105.359 11.8676 105.13 12.8841 104.927 13.926L104.419 16.6196C103.936 13.926 103.275 10.724 102.436 6.98845H96.5409L94.33 24.2941H98.7517L99.9461 12.3758L102.97 24.2941H106.121L109.018 12.4012L110.263 24.2941H114.888L112.551 6.98845H106.502ZM127.671 6.98845L126.756 10.8765C126.527 11.8676 126.298 12.8841 126.095 13.926L125.587 16.6196C125.104 13.926 124.443 10.724 123.605 6.98845H117.709L115.498 24.2941H119.92L121.114 12.3758L124.138 24.2941H127.29L130.161 12.4012L131.406 24.2941H136.031L133.693 6.98845H127.671ZM142.054 17.4582H146.196V13.8751H142.054V10.6986H146.831V7.01386H137.378V24.3195H146.857V20.6347H142.054V17.4582ZM160.02 14.7137C160.503 13.926 160.757 13.1128 160.757 12.2742C160.757 10.6478 160.122 9.35177 158.851 8.41152C157.581 7.47127 155.827 6.98845 153.642 6.98845H148.204V24.2941H152.88V16.4163H152.956L156.742 24.2941H161.672L157.937 16.4926C158.826 16.086 159.537 15.5015 160.02 14.7137ZM152.854 14.4342V10.3174C153.972 10.3428 154.76 10.5207 155.243 10.8765C155.726 11.2323 155.954 11.7913 155.954 12.6045C155.954 13.7989 154.912 14.4088 152.854 14.4342ZM163.502 9.02142C161.799 10.6986 160.961 12.8332 160.961 15.4253C160.961 18.1952 161.799 20.4569 163.476 22.1595C165.154 23.8621 167.339 24.7261 170.058 24.7261C170.846 24.7261 171.735 24.599 172.701 24.3195V20.2027C171.812 20.4569 171.049 20.5839 170.388 20.5839C169.042 20.5839 167.974 20.1265 167.161 19.2371C166.348 18.3222 165.941 17.1025 165.941 15.5523C165.941 14.1038 166.348 12.9095 167.136 11.9946C167.949 11.0544 168.94 10.597 170.16 10.597C170.947 10.597 171.786 10.724 172.701 10.9781V6.86139C171.862 6.63268 170.922 6.53103 169.931 6.53103C167.364 6.50562 165.204 7.34422 163.502 9.02142ZM178.673 20.5839V17.4328H182.815V13.8497H178.673V10.6732H183.476V6.98845H174.022V24.2941H183.501V20.6093H178.673V20.5839Z" fill="white" />
                </svg>
            </div>
            <div id="bottomContainer">
                <div id="whoWeAre">
                    <p>Who we Are</p>
                    <div id="more">
                        <a href="#">About</a>
                        <a href="#">Team</a>
                        <a href="#">Work With Us</a>
                    </div>
                </div>
                <div id="Woocommerce">
                    <p>Woocommerce</p>
                    <div id="more">
                        <a href="#">Features</a>
                        <a href="#">Payments</a>
                        <a href="#">Marketing</a>
                        <a href="#">Shipping</a>
                        <a href="#">Extension Store</a>
                        <a href="#">eCommerce blog</a>
                        <a href="#">Development blog</a>
                        <a href="#">Ideas board</a>
                        <a href="#">Mobile App</a>
                        <a href="#">Community</a>
                        <a href="#">Style Guide</a>
                        <a href="#">Email Newsletter</a>
                    </div>
                </div>
                <div id="Other products">
                    <p>Other products</p>
                    <div id="more">
                        <a href="#">Storefront</a>
                        <a href="#">WooSlider</a>
                        <a href="#">Sensei</a>
                        <a href="#">Sensei Extensions</a>
                    </div>
                </div>
                <div id="whoWeAre">
                    <p>Support</p>
                    <div id="more">
                        <a href="#">Documentation</a>
                        <a href="#">Customizations</a>
                        <a href="#">Support Policy</a>
                        <a href="#">Contact</a>
                        <a href="#">COVID-19 Resources</a>
                        <a href="#">Privacy Notice for</a>
                        <a href="#">California Users</a>
                    </div>
                </div>
                <div id="whoWeAre">
                    <p>We recommend</p>
                    <div id="more">
                        <a href="#">WooExperts</a>
                        <a href="#">Hosting Solutions</a>
                        <a href="#">Pre-sales FAQ</a>
                        <a href="#">Success Stories</a>
                        <a href="#">Design Feedback Group</a>
                    </div>
                </div>
            </div>
        </StyledFooter>
    );
};