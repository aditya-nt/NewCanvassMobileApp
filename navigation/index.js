import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './RootNavigator';
import SubscribeProvider from './SubscriberContext';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <SubscribeProvider>
        <RootNavigator />
      </SubscribeProvider>
    </AuthenticatedUserProvider>
  );
}
