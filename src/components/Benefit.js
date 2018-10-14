import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import Container from './partials/Container';
import SectionHeader from './partials/SectionHeader';
import CollapseCard from './partials/CollapseCard';
import Cta from './partials/Cta';

class Benefit extends React.Component {
    
    render() {

        return (
            <Container id="benefit" bgColor="gradient">
                <SectionHeader 
                    title="Nos prestations de conseil" 
                />
                <Grid item xs={12}>
                    <CollapseCard
                        icon="asterisk"
                        title="L’éventail de nos propositions"
                        excerpt="Social RH Compétences accompagne les entreprises dans tous leurs projets RH, de la phase d’audit préalable jusqu’à la mise en oeuvre et le suivi des projets."
                        content="• Audit de conformité règlementaire de l’organisation RH 
                        Accompagnement à la négociation d’entreprise suite aux ordonnances Macron 
                        Mise en place d’une organisation en télétravail  
                        • Accompagnement à la réorganisation du temps de travail
                        • Mise en place des entretiens annuels d’évaluation et entretiens professionnels
                        • Accompagnement à la réalisation des entretiens
                        • Elaboration d’une stratégie de formation
                        • Accompagnement à la conception et au financement du plan de formation
                        • Mise en place et gestion d’une politique de rémunération
                        • Mise en place et mise à jour du document unique d’évaluation des risques professionnels
                        • Mise en place d’une politique de prévention des risques professionnels
                        • Analyse et réduction des coûts liés à l’absentéisme
                        • Mise place d’outils de gestion prévisionnelle des emplois et des compétences
                        • Accompagnement à la gestion des carrières" 
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CollapseCard
                        icon="map-signs"
                        title="Quelques exemples de solutions « Social RH »"
                        excerpt="Suite au déménagement d’une entreprise, la négociation d’un accord de télétravail pour les collaborateurs volontaires éloignés du nouveau site, permet de fidéliser les salariés tout en faisant évoluer les méthodes de travail."
                        content="Face à l’augmentation des effectifs, mettre en place une stratégie négociée de développement des compétences et des carrières au moyen d’ »entretiens d’évolution » permet d’identifier les talents tout en les adaptant à l’évolution de l’entreprise

                        Face à une dégradation du climat social et à l’augmentation de l’absentéisme, accompagner la direction à négocier un accord d’entreprise sur le bien-être au travail marque l’engagement de l’entreprise dans un objectif « gagnant-gagnant » " 
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CollapseCard
                        icon="cogs"
                        title="Les méthodes d’intervention « Social RH »"
                        excerpt="La démarche de Social RH Compétences consiste à répondre au plus près aux besoins de ses clients en leur proposant des solutions tout à la fois pragmatiques et agiles."
                        content="Le client reste maître de son organisation sociale et RH et de la mise en œuvre des solutions.
                        La méthode utilisée se structure en plusieurs phases commençant nécessairement par des entretiens avec la direction et un audit de la situation, car les vraies questions ne se situent pas toujours là où on l’imagine.
                        Démarre la phase opérationnelle d’analyse et d’étude sur le terrain, qui aboutit à la proposition d’un rapport écrit et argumenté proposant les solutions applicables au contexte rencontré.
                        Ces propositions sont présentées au cours d’un entretien et d’échanges avec la direction.
                        Lorsque cette dernière a fait son choix, Social RH Compétences accompagne la mise en œuvre de la stratégie retenue jusqu’à la validation finale du processus.
                        Social RH Compétences n’a atteint ses objectifs qu’une fois que les problématiques ont été solutionnées et que les outils mis en œuvre soient opérationnels et maîtrisés par le client. "
                    />
                </Grid>
                <Cta color="primary" text="L'actualité social RH" anchor={this.props.anchor} xs={12} align="center" />
            </Container>
        )
    }
}

Benefit.propTypes = {
    anchor: PropTypes.string,
};

export default Benefit;
