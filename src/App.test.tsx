import { render, fireEvent, waitFor } from '@testing-library/react';
import { API, graphqlOperation } from 'aws-amplify';
import App from './App';
import { listCatPictures } from './graphql/queries';
import { createCatPicture } from './graphql/mutations';

jest.mock('aws-amplify');

describe('App', () => {
  beforeEach(() => {
    (API.graphql as jest.Mock).mockReset();
  });

  test('fetches and displays cat pictures', async () => {
    const mockCatPictures = [
      { id: '1', imageData: 'abc123', description: 'Cat 1' },
      { id: '2', imageData: 'def456', description: 'Cat 2' },
    ];
    (API.graphql as jest.Mock).mockResolvedValueOnce({ data: { listCatPictures: { items: mockCatPictures }}});

    const { getByAltText } = render(<App />);

    await waitFor(() => {
      mockCatPictures.forEach(catPicture => {
        const img = getByAltText(catPicture.description);
        expect(img).toBeInTheDocument();
      });
    });
  });

  test('adds a new cat picture', async () => {
    const file = new File(['test image data'], 'test.jpg', { type: 'image/jpeg' });
    (API.graphql as jest.Mock)
      .mockResolvedValueOnce({ data: { listCatPictures: { items: [] }}})
      .mockResolvedValueOnce({ data: { createCatPicture: { id: '1', imageData: 'abc123', description: 'test.jpg' }}})
      .mockResolvedValueOnce({ data: { listCatPictures: { items: [{ id: '1', imageData: 'abc123', description: 'test.jpg' }]}}});

    const { getByLabelText, getByRole } = render(<App />);

    const fileInput = getByLabelText(/Choose a cat picture/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    const addButton = getByRole('button', { name: /Add Cat Picture/i });
    fireEvent.click(addButton);

    await waitFor(() => {
      const newCatPicture = getByAltText('test.jpg'); 
      expect(newCatPicture).toBeInTheDocument();
    });
  });
});
