import { logo } from "../assets"
import styles from "../style"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img 
            src={logo} 
            alt="Hoobank" 
            className="w-[266px] h-[72px] object-contain" 
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable, and secure.</p>
        </div>
      </div>
    </section>
  )


export default Footer