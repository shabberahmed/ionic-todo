import React from 'react';
import { IonContent, IonGrid, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {


  return (
    <IonPage >
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large" color={'secondary'}  className='ion-title'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='background'>
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
