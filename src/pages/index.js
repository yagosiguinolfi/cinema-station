import Head from 'next/head';
import DefaultContent from '../components/DefaultContent';
import { ModelsWrapper, ModelSection } from '../components/Model';
import { Container } from './styles';

function HomePage() {
  return (
    <>
      <Head>
        <title>Cinema Station</title>
      </Head>
      <Container>
        <ModelsWrapper>
          <div>
            {[
              'Filme 1',
              'Filme 2',
              'Filme 3',
              'Filme 4',
              'Filme 5',
              'Filme 6',
              'Filme 7',
            ]}
            <ModelSection
              modelName="Model One"
              overlayNode={
                <DefaultContent
                  label="Model One"
                  description="Order online for delivery"
                />
              }
            />
          </div>
        </ModelsWrapper>
      </Container>
    </>
  );
}

export default HomePage;
