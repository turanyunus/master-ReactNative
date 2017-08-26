import React, { Component } from 'react';
import {
	Text,View
} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';

import MainPage from './pages/mainpages/mainpage.js';
import MessagePage from './pages/messagepages/messagepage';
import NotificationPage from './pages/notificationpages/notificationpage';

const TabIcon =({ selected, title,iconName})=>{
    return(
        <Text style={{color: selected ? 'red':'black'}}>{{title}}</Text>
    );
}

const Index = () => {
		return(
			<Router>
                <Scene key="root">
                    <Scene 
                        key="tabbar"
                        tabs
                        tabBarStyle={{
                            backgroundColor:'#3498db'
                        }}>
                        
                        <Scene key="main" title="Anasayfa" icon={TabIcon}>
                            <Scene 
                                key="main"
                                component={MainPage}
                                hideNavBar
                            />
                        </Scene>
                        <Scene key="message" title="Mesaj" icon={TabIcon}>
                            <Scene 
                                key="message"
                                component={MessagePage}
                                hideNavBar
                            />
                        </Scene>
                         <Scene key="notification" title="Bildirim" icon={TabIcon}>
                            <Scene 
                                key="notification"
                                component={NotificationPage}
                                hideNavBar
                            />
                        </Scene>

                    </Scene>
                </Scene>
            </Router>
		);
} 
export default Index;