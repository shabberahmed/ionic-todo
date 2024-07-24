import { IonGrid, IonInput, IonItem, InputChangeEventDetail, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './ExploreContainer.css';
import React from 'react';

const ExploreContainer: React.FC<any> = () => {
  const [name, setName] = React.useState<string>('');

  const handleTaskInput = (event: CustomEvent<InputChangeEventDetail>) => {
    setName(event.detail.value as string);
  };

  return (
    <>
      <IonGrid  className='inner-scroll'>
        <IonItem className='ion-input'>
          <IonInput
            type="text"
            placeholder="Enter Task......"
            value={name}
            onIonInput={handleTaskInput}
          ></IonInput>
        </IonItem>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
      </IonGrid>
    </>
  );
};

export default ExploreContainer;
