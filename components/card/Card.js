import Link from 'next/link';
import styles from './Card.module.scss';
import Arrow from '../../public/icons/up-right-arrow.svg';
import Github from '../../public/icons/github.svg';
import LinkIcon from '../../public/icons/link.svg';

export default function Card({ href, github, title, body, tags, children, img, caption, subtitle }) {

  return (
    <div className={styles.card}>

      <div className={styles.image}>
        {img && <img src={img} alt={title} />}
        {caption && <span className={styles.caption}>{caption}</span>}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        {tags && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag} data-type={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
        {body && <span className={styles.body}>{body}</span>}
        {children}
        <div className={styles.buttons}>
          {href && <Link className="button" data-type="primary" href={href}>
            <LinkIcon />Site
            </Link>}
          {github && <Link className="button" data-type="primary" href={github}><Github />Github</Link>}
        </div>
      </div>
    </div>
  );
}
