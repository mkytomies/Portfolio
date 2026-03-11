import { render, screen, renderHook, act, waitFor } from "@testing-library/react";
import Sidebar from "../Sidebar";
import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

test('Render sidebar on desktop without arrow', async () => {
    global.innerWidth = 1800;
    global.dispatchEvent(new Event('resize'));

    await act( async () => render(
        <Sidebar />
    ));

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact & Socials')).toBeInTheDocument();

    const arrow = screen.getByTestId('arrow');
    const styles = getComputedStyle(arrow);
    expect(styles.visibility).toBe('hidden');
});

test('Render sidebar on mobile with arrow', async () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    await act( async () => render(
        <Sidebar />
    ));

    const arrow = screen.getByTestId('arrow');
    const styles = getComputedStyle(arrow);
    expect(styles.rotate).toBe('0deg');
});

test('Sidebar should be closed by default on mobile', () => {
    render(
        <Sidebar />
    );

    const sidebarContainer = screen.getByTestId('sidebarContainer');
    const styles = getComputedStyle(sidebarContainer);
    expect(styles.left).toBe('-74%');
});

test('Sidebar should open and close when user click arrow on mobile', async () => {
    render(
        <Sidebar />
    );

    await userEvent.click(screen.getByAltText('Right pointing arrow'));

    const sidebarContainer = screen.getByTestId('sidebarContainer');
    const styles = getComputedStyle(sidebarContainer);
    expect(styles.left).toBe('0px');

    await userEvent.click(screen.getByAltText('Left pointing arrow'));
    const updatedStyles = getComputedStyle(sidebarContainer);
    expect(updatedStyles.left).toBe('-74%');
});