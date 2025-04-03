import React from 'react';
import NavBar from '../../assets/components/navbar/navbar';
import AddButton from '../../assets/components/add_button/add_button';
import SubmitForm from '../../assets/components/submit_form/submit_form';
import ContentList from '../../assets/components/content_list/content_list';
import Footer from '../../assets/components/footer/footer';

const UnitPage = () => {
  return (
    <div>
        <NavBar/>
        <AddButton/>
        <SubmitForm/>
        <ContentList/>
        <Footer/>
    </div>
  );
};

export default UnitPage;
