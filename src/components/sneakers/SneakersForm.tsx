import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useCreateSneaker, useUpdateSneaker } from '../../services/SneakersService';
import { useSneakerContext } from './SneakerContext';
import Sneaker from '../../models/Sneaker';
import './SneakersForm.scss';
import Button from '../Button';

interface FormValues extends Omit<Sneaker, 'id'> {}

interface SneakersFormProps {
  onSubmit: SubmitHandler<FormValues>;
}

function SneakersForm({ onSubmit }: SneakersFormProps) {
  const createSneakerMutation = useCreateSneaker();
  const updateSneakerMutation = useUpdateSneaker();
  const { selectedSneaker } = useSneakerContext();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const localSubmit: SubmitHandler<FormValues> = async (formData) => {
    const newSneaker: Sneaker = {
      id: selectedSneaker ? selectedSneaker.id : uuidv4(),
      ...formData,
    };
    try {
      if (selectedSneaker) {
        // Perform update if ID exists
        await updateSneakerMutation.mutateAsync(newSneaker);
      } else {
        // Perform create if no ID exists
        await createSneakerMutation.mutateAsync(newSneaker);
      }
      reset(); // Reset form after successful submission
    } catch (error) {
      // Handle error
    }
    console.log(newSneaker)
    reset();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(localSubmit)}
      className={`form-container ${Object.keys(errors).length ? 'invalid' : ''}`}
    >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          defaultValue={selectedSneaker?.name || ''}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <div className="error">{errors.name.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          defaultValue={selectedSneaker?.brand || ''}
          {...register('brand', { required: 'Brand is required' })}
        />
        {errors.brand && <div className="error">{errors.brand.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          defaultValue={selectedSneaker?.price || ''}
          {...register('price', { required: 'Price is required' })}
        />
        {errors.price && <div className="error">{errors.price.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          defaultValue={selectedSneaker?.size || ''}
          {...register('size', { required: 'Size is required' })}
        />
        {errors.size && <div className="error">{errors.size.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          defaultValue={selectedSneaker?.year || ''}
          {...register('year', { required: 'Year is required' })}
        />
        {errors.year && <div className="error">{errors.year.message}</div>}
      </div>
      <Button type="submit" iconText="+" text="Add new sneakers" />
    </form>
  );
}

export default SneakersForm;
