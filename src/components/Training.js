import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import Container from './partials/Container';
import SectionHeader from './partials/SectionHeader';
import CollapseCard from './partials/CollapseCard';
import Cta from './partials/Cta';

class Training extends React.Component {
    
    render() {

        return (
            <Container id="training" bgColor="gradient">
                <SectionHeader 
                    title="Nos Formations" 
                />
                <Grid item xs={12}>
                    <CollapseCard
                        icon="connectdevelop"
                        title="Notre approche de la formation"
                        excerpt="Parce que le droit du travail est au service de la gestion des ressources humaines, les formations Social RH Compétences sont pragmatiques, débarrassées du jargon juridique et illustrées de mises pratiques et d’exemples concrets."
                        content="Au-delà de transférer des connaissances, Social RH Compétences veut, au travers de ses formations, transmettre à ses stagiaires des modes de raisonnement, des méthodes de travail et de résolution des problèmes concrets.
                        Des ateliers permettent en cours de formation de réaliser des simulations de situations vécues et de valider les acquis des stagiaires.
                        Toutes nos formations sont réalisées en inter-entreprises (groupes jusqu’à 12 personnes) et en formation sur mesure (intra-entreprise).
                        Contactez-nous pour connaître nos programmes, nos dates de disponibilité et nos tarifs !" 
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CollapseCard
                        icon="balance-scale"
                        title="Nos formations en droit social"
                        excerpt="Nos thématiques de formation en droit social peuvent être déclinées à la demande en session intra-entreprise pour s’adapter au plus près des besoins et du secteur d’activité du client."
                        content="•	Atelier : maîtriser les changements issus des réformes Macron en droit du travail 
                        Atelier : savoir négocier dans l’entreprise suite aux ordonnances Macron 
                       •	Atelier : rédiger le contrat de travail et les clauses sensibles en toute sécurité
                       •	Atelier : maîtriser les différentes ruptures du contrat de travail suite aux ordonnances Macron
                       •	Savoir gérer les embauches en CDD et les fins de contrat
                       •	Mettre en place les forfaits horaires dans l’entreprise
                       •	Savoir décider et appliquer les sanctions disciplinaires dans l’entreprise
                       •	Les basiques du droit du travail : les contrats, les sanctions et les ruptures
                       •	Droit du travail : approfondissement pour les experts
                       •	La base de données économique et sociale : mettre en place votre outil de communication avec les IRP suite aux ordonnances Macron
                       •	Elire et mettre en place le CSE dans l’entreprise
                       •	Direction et manager : savoir gérer votre CSE au quotidien
                       •	Gérer le CSE dans les entreprises de moins de 50 salariés / dans les entreprises d’au moins 50 salariés
                       •	Savoir gérer les attributions de représentants du personnel en santé et sécurité du travail
                       •	Gérer les représentants du personnel élus avant les ordonnances Macron (DP, CE, CHSCT, DUP" 
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CollapseCard
                        icon="users"
                        title="Nos formations en gestion RH"
                        excerpt="Nos thématiques de formation en gestion RH peuvent être déclinées à la demande en session intra-entreprise pour s’adapter au plus près des besoins et du secteur d’activité du client."
                        content="•	Concevoir et réaliser les entretiens avec les salariés : entretiens annuels et entretiens professionnels
                        •	Définir une politique de formation adaptée à l’entreprise
                        •	Les dispositifs de formation et leur financement : comment faire le bon choix ?
                        •	Gestion du temps de travail : identifiez les méthodes adaptées à votre entreprise
                        •	Le document unique d’évaluation des risques professionnels comme outils de gestion des risques
                        •	Concevoir et mettre en place une politique efficace de prévention des risques professionnels
                        •	Gérer les situations d’inaptitude dans l’entreprise
                        •	La politique de rémunération : définir votre stratégie et la mettre en œuvre
                        •	Savoir mettre en place une politique efficace de gestion des emplois et des compétences
                        •	Mettre en place et appliquer une politique de non-discrimination et d’égalité de traitement
                        •	Anticiper l’évolution des effectifs et la gestion des carrières
                        •	Préparer le départ des salariés âgés
                        •	Savoir gérer les déplacements "
                    />
                </Grid>
                <Cta color="primary" text="Notre offre conseil" anchor={this.props.anchor} xs={12} align="center"/>
            </Container>
        );
    }
}

Training.propTypes = {
    anchor: PropTypes.string,
};

export default Training;
