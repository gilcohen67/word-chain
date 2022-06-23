import * as React from 'react';
import styles from '../styles/Timeline.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TopBar from '../components/TopBar';
import useGlobalContext from '../src/GlobalContext';
import { Title } from '@mui/icons-material';
import { TimelineOppositeContent } from '@mui/lab';

export default function TimelineView() {
  const { timeline } = useGlobalContext();
  return (
    <>
      <TopBar playPage/>
      <main className={styles.main}>
        <h3 className={styles.title}>Timeline</h3>
        <Timeline>
          {timeline.map((item, idx) => {
            return (
              <TimelineItem key={idx}>
                <TimelineOppositeContent>
                  {idx + 1 == timeline.length ? 'END' : idx || 'START'}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  {idx + 1 !== timeline.length && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{item}</TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </main>
    </>
  )
}