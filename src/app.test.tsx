import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  test('renders initial app structure', () => {
    render(<App />);
    const settingsLink = screen.getByRole('link', { name: 'Settings' });
    const searchLink = screen.getByRole('link', { name: 'Search' });
    const closeCircleLink = screen.getByTestId('close-search-icon');

    const pickCityText = screen.getByText(
      'Pick a city to see the full forecast'
    );
    const loadingCitiesText = screen.getByText('Loading Cities');

    expect(settingsLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
    expect(closeCircleLink).toBeInTheDocument();
    expect(pickCityText).toBeInTheDocument();
    expect(loadingCitiesText).toBeInTheDocument();

    expect(closeCircleLink.firstChild?.nodeName).toBe('svg');
  });

  test('settings modal should be hidden', () => {
    render(<App />);
    const settingsTitle = screen.getByTestId('settings-modal-title');

    const unitsTitle = screen.getByText('Units');
    const imperialButton = screen.getByText('Imperial');
    const metricButton = screen.getByText('Metric');
    const standardButton = screen.getByText('Standard');

    expect(settingsTitle).toBeInTheDocument();
    expect(settingsTitle).not.toBeVisible();

    expect(unitsTitle).toBeInTheDocument();
    expect(unitsTitle).not.toBeVisible();

    expect(imperialButton).toBeInTheDocument();
    expect(imperialButton).not.toBeVisible();

    expect(metricButton).toBeInTheDocument();
    expect(metricButton).not.toBeVisible();

    expect(standardButton).toBeInTheDocument();
    expect(standardButton).not.toBeVisible();
    expect(standardButton.parentElement?.className).toContain('active');
  });

  test('open settings modal', () => {
    render(<App />);
    const settingsLink = screen.getByRole('link', { name: 'Settings' });
    fireEvent.click(settingsLink);

    const settingsTitle = screen.getByTestId('settings-modal-title');

    expect(settingsTitle).toBeVisible();
  });

  test('measurement system should start as standard', () => {
    render(<App />);

    const imperialButton = screen.getByText('Imperial');
    const standardButton = screen.getByText('Standard');

    fireEvent.click(imperialButton);

    expect(imperialButton.parentElement?.className).toContain('active');
    expect(standardButton.parentElement?.className).not.toContain('active');
  });

  test('change measurement system to imperial', () => {
    render(<App />);

    const imperialButton = screen.getByText('Imperial');
    const standardButton = screen.getByText('Standard');

    fireEvent.click(imperialButton);

    expect(imperialButton.parentElement?.className).toContain('active');
    expect(standardButton.parentElement?.className).not.toContain('active');
  });

  test('initial clock setting should be am/pm', () => {
    render(<App />);
    const clockAmPmButton = screen.getByText('AM/PM');
    expect(clockAmPmButton.parentElement?.className).toContain('active');
  });

  test('change clock setting to 24 hour', () => {
    render(<App />);

    const clockAmPmButton = screen.getByText('AM/PM');
    const clock24hButton = screen.getByText('24h');

    fireEvent.click(clock24hButton);

    expect(clock24hButton.parentElement?.className).toContain('active');
    expect(clockAmPmButton.parentElement?.className).not.toContain('active');
  });

  test('saving the settings should close the modal', () => {
    render(<App />);
    const saveLink = screen.getByRole('heading', { name: 'Save' });
    fireEvent.click(saveLink);

    const settingsTitle = screen.getByTestId('settings-modal-title');

    expect(settingsTitle).not.toBeVisible();
  });

  test('cancelling in the settings should close the modal', () => {
    render(<App />);

    const settingsLink = screen.getByRole('link', { name: 'Settings' });
    fireEvent.click(settingsLink);

    const cancelLink = screen.getByRole('heading', { name: 'Cancel' });
    fireEvent.click(cancelLink);

    const settingsTitle = screen.getByTestId('settings-modal-title');
    expect(settingsTitle).not.toBeVisible();
  });
});
