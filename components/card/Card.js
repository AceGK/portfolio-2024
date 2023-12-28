import Link from 'next/link';
import styles from './Card.module.scss';
import Arrow from '../../public/up-right-arrow.svg';

export default function Card({ href, title, body, tags, children, img, caption, subtitle }) {
  // Wrapper component conditionally set to either Link or div
  const Wrapper = href ? Link : 'div';

  // Additional props for the wrapper
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper {...wrapperProps} className={styles.card}>

      <div className={styles.image}>
        {img && <img src={img} alt={title} />}
        {caption && <span className={styles.caption}>{caption}</span>}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}<Arrow /></div>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        {body && <span className={styles.body}>{body}</span>}
        {children}
        {tags && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag} data-type={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
