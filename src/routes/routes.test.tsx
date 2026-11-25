import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";
import App from "../App";

function renderAt(path: string) {
  vi.stubGlobal("matchMedia", (media: string) => ({ matches: false, media }));
  vi.stubGlobal("scrollTo", vi.fn());
  window.history.replaceState(null, "", `#${path}`);
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
}

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test("opens a paper from the paper index and preserves its hash URL", async () => {
  renderAt("/papers");

  const paper = await screen.findByRole("link", { name: /Darwinia Genepaper V5/ });
  expect(paper.getAttribute("href")).toBe("#/paper/genepaper-v5");

  fireEvent.click(paper);

  await screen.findByRole("heading", { name: "Darwinia Genepaper V5", level: 1 });
  expect(window.location.hash).toBe("#/paper/genepaper-v5");
  expect(screen.getByRole("link", { name: /View Full Paper/ }).getAttribute("href")).toBe("/Genepaper_v5.pdf");
});

test("redirects an unknown paper ID to the existing not-found page", async () => {
  renderAt("/paper/does-not-exist");

  await screen.findByText("Sorry, Page Not Found");
  expect(window.location.hash).toBe("#/not-found");
});

test("keeps the unknown route URL and offers a link home", async () => {
  renderAt("/does-not-exist");

  await screen.findByText("Sorry, Page Not Found");
  expect(window.location.hash).toBe("#/does-not-exist");
  expect(screen.getByRole("link", { name: "Go Home >" }).getAttribute("href")).toBe("#/");
});
