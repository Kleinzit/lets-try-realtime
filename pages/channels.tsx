import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Logger, { LogEntry } from "../components/logger";
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/PubSub.module.css'
import * as Ably from 'ably/promises'
import { configureAbly } from "@ably-labs/react-hooks";

export default function Channels() {
    const [logs, setLogs] = useState<Array<LogEntry>>([]);
    const [channels, setChannels] = useState<Array<Ably.Types.ChannelBase>>([]);

    useEffect(() => {
        const ably: Ably.Types.RealtimePromise = configureAbly({ authUrl: '/api/authentication/token-auth' })

        ably.connection.on((stateChange: Ably.Types.ConnectionStateChange) => {
            console.log(stateChange)
        })
        ably.request('get', '/channels').then(res => {console.log(res.items), setChannels(res.items)});
    }, []);

    return (
        <Layout
            pageTitle="View Channels"
            metaDescription="View Channels"
        >
            <p className={homeStyles.description}>
                View the list of channels
            </p>

            <section className={styles.publish}>
                {channels.map((chan) => <div key={chan.name}>{chan.name}</div>)}
            </section>

            <section>
                <h3>Subscribe</h3>
                <Logger logEntries={logs} />
            </section>
        </Layout>
    )
}