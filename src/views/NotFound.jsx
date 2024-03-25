import React from "react";
import { Link } from "wouter";

function Index() {
  return (
    <div>
      Il y a eu une erreur dans le chargement Veuillez retourner à la
      <Link href="/" className="link" aria-label="Go to homepage">
          page d&apos;accueil
      </Link>
      .
    </div>
  );
}

export default Index;
