import { Metadata } from 'next';
import Navbar from '@/components/common/Navbar';
import Herobanner from '@/containers/Home/HeroBanner';
import Slider from '@/containers/Home/Slider';
import Experts from '@/components/common/Experts';
import Engagement from '@/containers/Home/Engagement';
import Feuillage from '@/containers/Home/Feuillage';
import Carte from '@/components/common/Carte';
import Form from '@/components/common/Form'

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Navbar></Navbar>  
  <Herobanner></Herobanner>
  <Slider></Slider>
  <Experts></Experts>
  <Engagement></Engagement>
  <Feuillage></Feuillage>
  <Carte></Carte>
  <Form></Form>
  </>;
}
