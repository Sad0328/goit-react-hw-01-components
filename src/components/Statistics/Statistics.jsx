import styles from './Statistics.module.css';


const Statistics =({ title, stats = [] }) => {
  const statisticEl = stats.map(stat => (
    <li className={styles.statItem} key={stat.id}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  ));
        
        
        return  (
      <div className={styles.statistics}>
        {title && <h2 className={styles.statTitle}>{title}</h2>}
        <ul className={styles.statList}>{statisticEl}</ul>
      </div>
    );
  };
        
          export default Statistics;
        
//         <Statistic key={stat.id} title={stat.title} />)
//     <section className={styles.statistics}>
//   <h2 className={styles.title}>Upload stats</h2>

//   <ul className={styles.statList}>
//     <li className={styles.item}>
//       <span className={styles.label}>.docx</span>
//       <span className={styles.percentage}>4%</span>
//     </li>
//     <li className={styles.item}>
//       <span className={styles.label}>.mp3</span>
//       <span className={styles.percentage}>14%</span>
//     </li>
//     <li className={styles.item}>
//       <span className={styles.label}>.pdf</span>
//       <span className={styles.percentage}>41%</span>
//     </li>
//     <li className={styles.item}>
//       <span className={styles.label}>.mp4</span>
//       <span className={styles.percentage}>12%</span>
//     </li>
//   </ul>
// </section>;




