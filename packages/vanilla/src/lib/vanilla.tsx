import styles from './vanilla.module.scss';

/* eslint-disable-next-line */
export interface VanillaProps {}

export function Vanilla(props: VanillaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Vanilla!</h1>
    </div>
  );
}

export default Vanilla;
