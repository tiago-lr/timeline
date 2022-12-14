import React, { useState, useEffect } from 'react';
import { ILinkedinData,  } from '../../model/profile';
import { getLinkedinData } from '../../services/profile.service';
import CareerPathUI from '../../ui/composed/CareerPath';

interface Props {
    onSelectCompany?: (id: number, title?: string) => void
};

const CareerPath = ({ onSelectCompany = ()=>{} }: Props) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ILinkedinData[]>([]);

    const onSelect = (id: number) => {
        const company = data.find(elem => elem.id === id);
        onSelectCompany(id, company?.name);
    }

    const loadData = async () => {
        setLoading(true);
    
        try {
          const response = await getLinkedinData();
    
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

    return <CareerPathUI isLoading={loading} data={data} onSelect={onSelect}/>;
}

export default CareerPath;