import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/DefaultLayout'
import HomeAnimation from '../components/HomeAnimation/HomeAnimation'
import Resume from '../components/Resume/Resume'

const IndexPage = () => (
    <Layout>
        <Helmet
            title="Home"
            meta={[
                { name: 'iler.io Home Page', content: 'Interactive home animation' },
                { name: 'keywords', content: 'home' }
            ]}
            bodyAttributes={{
                class: 'page-index'
            }}
        />
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <HomeAnimation/>
        <Resume/>
    </Layout>
)

export default IndexPage
