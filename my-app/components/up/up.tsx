import { JSX, useEffect } from "react";
import styles from './up.module.css';
import { useScrollY } from "../../hooks/useScrollY";
import { useAnimation, motion } from "framer-motion";
import { ButtonIcon } from "../buttonIcon/ButtonIcon";

export const Up = (): JSX.Element => {

    const controls = useAnimation();

    const y = useScrollY();

    useEffect(() => {
        console.log('useEffect called');
        console.log('y:', y);
        console.log('document.body.scrollHeight:', document.body.scrollHeight);
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (

        <motion.div 
            className={styles.up} 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <ButtonIcon icon="up" appearance="primary" onClick={scrollToTop}/>
        </motion.div>
    );
};


