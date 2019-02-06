import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/DefaultLayout'
import HomeAnimation from '../components/HomeAnimation/HomeAnimation'

const IndexPage = () => (
    <Layout>
        <Helmet
            title="Home"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
            ]}
            bodyAttributes={{
                class: 'page-index'
            }}
        />
        {/* 
            Couldn't find a way to render emoji consistently and accessibly
            that worked across all browsers so disabling the eslint warning
            for now.

            I mean, you were going to erase this anyway...sheeeeesh!
        */}
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <HomeAnimation/>
    </Layout>
)

export default IndexPage
