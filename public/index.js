

import React from 'react';
    import { ApplicationInsights } from '@microsoft/applicationinsights-web';
    import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
    import { createBrowserHistory } from "history";
    const browserHistory = createBrowserHistory({ basename: '' });
    var reactPlugin = new ReactPlugin();
     var clickPluginInstance = new ClickAnalyticsPlugin();
    var clickPluginConfig = {
        autoCapture: true
    }; 
    var appInsights = new ApplicationInsights({
        config: {
            connectionString: 'InstrumentationKey=6bd44586-aeec-47ae-9056-0019ea08f8f9;IngestionEndpoint=https://centralus-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralus.livediagnostics.monitor.azure.com/',
            enableAutoRouteTracking: true,
            extensions: [reactPlugin],
            extensionConfig: {
            [reactPlugin.identifier]: { history: browserHistory }
            }
        }
    });
    appInsights.loadAppInsights();