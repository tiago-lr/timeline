import React, { useState, useEffect } from 'react';
import { IPersonalData } from '../../model/profile';
import { getPersonnalData } from '../../services/profile.service';
import HeaderUI from '../../ui/composed/Header';

const Header = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IPersonalData>({
        name: "",
        picture: "",
        background: "",
        linkedin: "",
        github: "",
        location: "",
        jobTitle: "",
    });

    const loadData = async () => {
        setLoading(true);
    
        try {
          const response = await getPersonnalData();
    
          if (
            response?.success &&
            response?.payload
          ) {
            setData(response.payload);
          }
        } catch (error) {
          console.log("Something went wrong with data request, please try to refresh the page.");
        }
    
        setLoading(false);
      };

  useEffect(() => {
    loadData();
  }, []);

    return <HeaderUI isLoading={loading} {...data} />;
}

export default Header;